import placeholderImage from 'assets/placeholder.png'
import Counter from 'components/primitives/Counter'
import { CartItemDto } from 'models/Cart'
import { HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

interface CartItemProps extends HTMLAttributes<HTMLElement>, CartItemDto {
  id: string
  imageAlt?: string
}

export default function CartItem({
  id,
  name,
  price,
  totalPrice,
  amount,
  image,
  imageAlt,
}: CartItemProps) {
  return (
    <li key={id} className="flex py-6">
      <div className="w-40 h-40 rounded-md border border-gray-200">
        <img
          src={image ?? placeholderImage}
          alt={imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-gray-900">
            <h3 className="text-base font-medium">
              <Link to={`/item/${id}`}>{name}</Link>
            </h3>
            <p className="ml-4 text-base font-medium">{totalPrice} руб</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{price} руб</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <Counter dishId={id} amount={amount} />

          <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
            Удалить
          </button>
        </div>
      </div>
    </li>
  )
}
