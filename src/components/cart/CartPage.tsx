import { XMarkIcon } from '@heroicons/react/24/outline'
import { AxiosResponse } from 'axios'
import { CartItemDto } from 'models/Cart'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import CartService from 'services/CartService'
import CartItem from './CartItem'

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 2,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

export async function cartLoader({ requset }: { requset: Request }) {
  const response = await CartService.getCart()

  if (response.status >= 200 && response.status < 500) {
    return response
  }

  return new Response('', {
    status: 500,
    statusText: 'Internal server error',
  })
}

export default function CartPage() {
  const [open, setOpen] = useState(true)
  const loaderData = useLoaderData() as AxiosResponse<any, any>
  const data = loaderData.data as CartItemDto[]
  // let wholePrice =

  return (
    <div className="m-4">
      <div className="flex flex-col bg-white shadow-xl">
        <div className="flex-1 py-6 px-4 sm:px-6">
          <div className="flex items-start justify-between">
            <h1 className="text-lg font-medium text-gray-900">Shopping cart</h1>
          </div>

          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {data.map((item) => (
                  <CartItem
                    {...item}
                    key={item.id}
                    id={item.id.toString()}
                    amount={item.amount}
                    totalPrice={item.totalPrice}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Всего</p>
            <p>262 руб</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
          <div className="mt-6">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Оформить заказ
            </a>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => setOpen(false)}
              >
                Продолжить покупки
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
