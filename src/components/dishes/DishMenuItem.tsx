import Button from 'components/primitives/Button'
import StarRating from 'components/primitives/StarRating'
import { HTMLAttributes } from 'react'
import './DishMenuItem.css'
import VegetarianLabel from './VegetarianLabel'

interface DishMenuElementProps extends HTMLAttributes<HTMLElement> {
  image: string
  imageAlt?: string
  description: string
  name: string
  price: string
}

export default function DishMenuElement({
  image,
  name,
  description,
  price,
  imageAlt,
}: DishMenuElementProps) {
  return (
    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-lg hover:scale-102 p-4 rounded-lg relative">
      <VegetarianLabel />
      <img
        className="w-64 mx-auto transform transition duration-300 hover:scale-105"
        src={image}
        alt={imageAlt}
      />
      <div className="flex flex-col items-center my-3 space-y-2">
        <h1 className="text-gray-900 text-xl sm:text-lg">{name}</h1>
        <p className="text-gray-500 text-base sm:text-sm text-center">{description}</p>

        <StarRating />

        <div className="flex justify-between w-full items-center rounded-md bg-slate-100 p-2">
          <h2 className="text-gray-900 text-2xl font-semibold">{price}</h2>
          <Button
            styleType="secondary"
            className="bg-primary text-white px-8 py-2 focus:outline-none rounded-full mt-24 transform transition duration-300 hover:scale-10"
          >
            Order Now
          </Button>
        </div>
      </div>
    </div>
  )
}
