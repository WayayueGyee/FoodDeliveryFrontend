import { DishPagedList } from 'models/Dishes'
import { useLoaderData } from 'react-router-dom'
import DishService from 'services/DishService'
import DishMenuItem from './DishMenuItem'

export async function dishMenuLoader({ request }: { request: Request }) {
  const url = new URL(request.url)
  const params = Object.fromEntries(url.searchParams)

  const response = await DishService.getDishPage(params)

  if (response.status >= 200 && response.status <= 299) {
    return response.data
  }

  return new Response('', {
    status: 500,
    statusText: 'Internal server error',
  })
}

export default function DishMenu() {
  const loaderData = useLoaderData() as DishPagedList

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

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
        {/* <PaginationBar /> */}
      </div>
    </div>
  )
}
