import { DishPagedList } from 'models/Dishes'
import { useLoaderData } from 'react-router-dom'
import DishService from 'services/DishService'
import DishMenuElement from './DishMenuItem'

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 5,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
]

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
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {loaderData.dishes?.map((item) => (
            <DishMenuElement
              key={item.id}
              image={item.image}
              description={'Gay one the what walk then she. Demesne mention pr'}
              price={item.price.toString()}
              name={item.name}
            />
          ))}
          <DishMenuElement name={'Пиздатое блюдо'} />
        </div>
      </div>
    </div>
  )
}
