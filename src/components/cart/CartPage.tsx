import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { orderGetUrl } from 'routes/Routes'
import CartService from 'services/CartService'
import CartItem from './CartItem'
import { CartContext } from './CartPageWrapper'

export async function cartLoader({ request }: { request: Request }) {
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
  const { data, setData } = useContext(CartContext)!
  let wholeSum = 0

  const cartItems = []
  for (const id in data) {
    wholeSum += data[id].totalPrice

    cartItems.push(
      <CartItem
        id={data[id].id}
        // {...context[i]}
        // key={i}
        // id={context[i].id.toString()}
        // amount={context[i].amount}
        // totalPrice={context[i].totalPrice}
      />
    )
  }

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
                {cartItems}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Всего</p>
            <p>{wholeSum} руб</p>
          </div>
          {/* <p className="mt-0.5 text-sm text-gray-500"></p> */}
          <div className="mt-6">
            <Link
              to={`/${orderGetUrl}`}
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Оформить заказ
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>или</p>
            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
              Продолжить покупки
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
