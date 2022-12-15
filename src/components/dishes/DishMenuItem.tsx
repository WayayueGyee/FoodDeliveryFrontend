import placeholderImage from 'assets/placeholder.png'
import Button from 'components/primitives/Button'
import StarRating from 'components/primitives/StarRating'
import { DishDto } from 'models/Dishes'
import { HTMLAttributes } from 'react'
import { Link, useFetcher } from 'react-router-dom'
import { cartAddDishUrl } from 'routes/Routes'
import './DishMenuItem.css'
import NonVegetarianLabel from './NonVegetarianLabel'
import VegetarianLabel from './VegetarianLabel'

interface DishMenuElementProps extends HTMLAttributes<HTMLElement>, DishDto {
  id: string
  imageAlt?: string
}

export default function DishMenuItem({
  id,
  image,
  name,
  description,
  price,
  category,
  imageAlt,
  vegetarian,
}: DishMenuElementProps) {
  const fetcher = useFetcher()

  return (
    // hover:scale-102
    <div
      id={id}
      className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-lg p-4 rounded-lg relative"
    >
      {vegetarian ? <VegetarianLabel /> : <NonVegetarianLabel />}
      <Link to={`/item/${id}`}>
        <img
          className="w-full max-w-sm sm:max-w-md rounded-md mx-auto transform transition duration-300 hover:scale-105"
          src={image ?? placeholderImage}
          alt={imageAlt}
        />
      </Link>
      <div className="flex flex-col items-center my-3 space-y-2">
        <h1 className="text-gray-900 text-xl sm:text-lg">{name}</h1>
        <span>{'Категория блюда - ' + category}</span>
        <p className="text-gray-500 text-base sm:text-sm text-center">
          {description ?? 'Нет информации о блюде'}
        </p>

        <StarRating />

        <div className="flex justify-between w-full items-center rounded-md bg-slate-100 p-2">
          <h2 className="text-gray-900 text-xl font-bold">{price ? price + 'р' : '-'}</h2>
          <fetcher.Form action={cartAddDishUrl} method="post">
            <Button
              styleType="secondary"
              className="bg-primary text-white px-8 py-2 focus:outline-none rounded-full mt-24 transform transition duration-300 hover:scale-10"
            >
              В корзину
            </Button>
          </fetcher.Form>
        </div>
      </div>
    </div>
  )
}
