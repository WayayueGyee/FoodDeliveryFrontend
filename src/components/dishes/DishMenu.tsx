import Button from 'components/primitives/Button'
import { DishPagedList } from 'models/Dishes'
import { useState } from 'react'
import { useLoaderData, useSearchParams } from 'react-router-dom'
import DishService from 'services/DishService'
import DishMenuItem from './DishMenuItem'

export async function dishMenuLoader({ request }: { request: Request }) {
  const url = new URL(request.url)
  const params = Object.fromEntries(url.searchParams)

  const result: { dishes: any[]; pagination: any } = { dishes: [], pagination: {} }
  const pageNumber = params['page'] ? +params['page'] : 1

  for (let i = 1; i <= pageNumber; i++) {
    const response = await DishService.getDishPage({ ...params, page: i.toString() })

    if (response.status >= 200 && response.status <= 299) {
      const pagedList = response.data as DishPagedList
      result.dishes = result.dishes.concat(pagedList.dishes)
      result.pagination = pagedList.pagination
      if (pagedList.pagination.count === pagedList.pagination.current) break
    } else {
      throw new Response('', {
        status: response.status,
        statusText: response.statusText,
      })
    }
  }

  return result
}

export default function DishMenu() {
  const loaderData = useLoaderData() as DishPagedList
  const [isLastPage, setLastPage] = useState(false)
  const [search, setSearch] = useSearchParams()

  const loadPage = async () => {
    if (isLastPage) return

    const currPage = search.get('page') ?? '1'

    if (currPage === loaderData.pagination.count.toString()) {
      setLastPage(true)
      return
    }

    search.set('page', (+currPage + 1).toString())
    setSearch(search)
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Меню</h2>

        <div className="mt-6 mb-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {loaderData.dishes?.map((item) => {
            return (
              <DishMenuItem
                key={item.id}
                id={item.id}
                image={item.image}
                description={item.description}
                vegetarian={item.vegetarian}
                category={item.category}
                price={item.price}
                name={item.name}
              />
            )
          })}
        </div>
        <div className="">
          <Button styleType="primary" onClick={() => loadPage()}>
            Загрузить ещё
          </Button>
        </div>
        {/* <PaginationBar /> */}
      </div>
    </div>
  )
}
