import placeholderImage from 'assets/placeholder.png'
import Button from 'components/primitives/Button'
import StarRating from 'components/primitives/StarRating'
import { DishDto } from 'models/Dishes'
import { HTMLAttributes, useEffect } from 'react'
import { Link, Params, redirect, useFetcher } from 'react-router-dom'
import CartService from 'services/CartService'
import HttpStatusCode from 'utils/HttpStatusCode'
import './DishMenuItem.css'
import NonVegetarianLabel from './NonVegetarianLabel'
import VegetarianLabel from './VegetarianLabel'

interface DishMenuElementProps extends HTMLAttributes<HTMLElement>, DishDto {
  id: string
  imageAlt?: string
}

export async function addToCartAction({ request, params }: { request: Request; params: Params }) {
  const response = await CartService.addToCart(params['id'] ?? '')

  if (response.status == HttpStatusCode.UNAUTHORIZED) {
    return response
  }

  return new Response('', {
    status: 500,
    statusText: 'Internal server error',
  })
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

  const handleClick = async () => {
    const response = await CartService.addToCart(id)

    if (response.status === 401) {
      console.log('GOVNO')
      redirect('/login')
    }
  }

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
          <Button
            styleType="secondary"
            className="bg-primary text-white px-8 py-2 focus:outline-none rounded-full mt-24 transform transition duration-300 hover:scale-10"
            onClick={handleClick}
          >
            В корзину
          </Button>
        </div>
      </div>
    </div>
  )
}