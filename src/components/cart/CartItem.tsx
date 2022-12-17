import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import placeholderImage from 'assets/placeholder.png'
import { HTMLAttributes, useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import CartService from 'services/CartService'
import { CartContext } from './CartPageWrapper'
import ChangeAmount from './ChangeAmount'

interface CartItemProps extends HTMLAttributes<HTMLElement> {
  id: string
  imageAlt?: string
}

export default function CartItem({ id, imageAlt }: CartItemProps) {
  const { data, setData } = useContext(CartContext)!
  const selfItem = useRef(data[id])

  const handleAmountChange = (isIncr: boolean) => {
    if (isIncr) {
      return CartService.addToCart(id, true).then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          // setAmount(amount + 1)
          selfItem.current.amount++
          selfItem.current.totalPrice = selfItem.current.price * selfItem.current.amount
          setData({ ...data, [selfItem.current.id]: selfItem.current })
        }
      })
    } else {
      return CartService.deleteFromCart(id, true).then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          selfItem.current.amount--
          selfItem.current.totalPrice = selfItem.current.price * selfItem.current.amount
          setData({ ...data, [selfItem.current.id]: selfItem.current })
        }
      })
    }
  }

  const removeItem = () => {
    return CartService.deleteFromCart(id, false).then((res) => {
      if (res.status >= 200 && res.status <= 299) {
        const deletedData = { ...data }
        delete deletedData[id]
        setData({ ...deletedData })
      }
    })
  }

  return (
    <li key={id} className="flex py-6">
      <div className="w-40 h-40 rounded-md border border-gray-200">
        <img
          src={selfItem.current.image ?? placeholderImage}
          alt={imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-gray-900">
            <h3 className="text-base font-medium">
              <Link to={`/item/${id}`}>{selfItem.current.name}</Link>
            </h3>
            <p className="ml-4 text-base font-medium">{selfItem.current.totalPrice} руб</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{selfItem.current.price} руб</p>
        </div>
        {/* <Counter dishId={id} amount={amount} /> */}
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="inline-flex -space-x-px">
            <ChangeAmount className="rounded-l-md self-center">
              <button onClick={() => handleAmountChange(false)}>
                <MinusIcon className="h-5 w-5" />
              </button>
            </ChangeAmount>
            <ChangeAmount className="px-3">{selfItem.current.amount}</ChangeAmount>
            <ChangeAmount className="rounded-r-md self-center">
              <button onClick={() => handleAmountChange(true)}>
                <PlusIcon className="h-5 w-5" />
              </button>
            </ChangeAmount>
          </div>

          <button
            type="button"
            className="font-medium text-indigo-600 hover:text-indigo-500"
            onClick={() => removeItem()}
          >
            Удалить
          </button>
        </div>
      </div>
    </li>
  )
}
