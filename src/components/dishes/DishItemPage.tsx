import { DishDto } from 'models/Dishes'
import { Params, useLoaderData } from 'react-router-dom'
import DishService from 'services/DishService'
import DishMenuItem from './DishMenuItem'

export async function dishItemLoader({ request, params }: { request: Request; params: Params }) {
  const response = await DishService.getDishItem(params['id'] ?? '')

  if (response.status >= 200 && response.status <= 299) {
    return response.data
  }

  return new Response('', {
    status: 500,
    statusText: 'Internal server error',
  })
}

export default function DishItemPage() {
  const loaderData = useLoaderData() as DishDto

  return <DishMenuItem {...loaderData} />
}
