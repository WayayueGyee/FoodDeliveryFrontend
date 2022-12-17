import Button from 'components/primitives/Button'
import { DishDto, DishPagedList } from 'models/Dishes'
import { PageInfoModel } from 'models/PageInfo'
import { useRef } from 'react'
import { useFetcher, useLoaderData } from 'react-router-dom'
import { apiUrl } from 'routes/RequestRoutes'
import DishService from 'services/DishService'
import DishMenuItem from './DishMenuItem'

export async function dishMenuLoader({ request }: { request: Request }) {
  const url = new URL(request.url)
  const params = Object.fromEntries(url.searchParams)

  const result: { dishes: any[]; pagination: any } = { dishes: [], pagination: {} }

  for (let i = 0; i < +params[i]; i++) {
    const response = await DishService.getDishPage(params)

    if (response.status >= 200 && response.status <= 299) {
      const pagedList = response.data as DishPagedList
      result.dishes.concat(pagedList.dishes)
      result.pagination = pagedList.pagination

      if (pagedList.pagination.count === pagedList.pagination.count) {
        break
      }
    }
  }

  return new Response('', {
    status: 500,
    statusText: 'Internal server error',
  })
}

export default function DishMenu() {
  const loaderData = useLoaderData() as DishPagedList
  const fetcher = useFetcher()
  const currentPage = useRef(loaderData.pagination.current)

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Меню</h2>

        <div className="mt-6 mb-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {loaderData.dishes?.map((item) => (
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
          ))}
        </div>
        <fetcher.Form action={`${apiUrl}`}>
          <Button type="submit" styleType="primary">
            Загрузить ещё
          </Button>
        </fetcher.Form>
        {/* <PaginationBar /> */}
      </div>
    </div>
  )
}
