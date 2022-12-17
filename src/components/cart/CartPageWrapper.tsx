import { AxiosResponse } from 'axios'
import { CartItemDto } from 'models/Cart'
import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import CartPage from './CartPage'

type CartItemsType = { [key: string]: CartItemDto }

export const CartContext = React.createContext<{
  data: CartItemsType
  setData: React.Dispatch<React.SetStateAction<CartItemsType>>
} | null>(null)

export default function CartPageWrapper() {
  const loaderData = useLoaderData() as AxiosResponse<any, any>

  const dataObj: CartItemsType = {}
  for (const item of loaderData.data) {
    dataObj[item.id] = item
  }

  console.log(dataObj)
  const [data, setData] = useState(dataObj)

  return (
    <CartContext.Provider value={{ data, setData }}>
      <CartPage />
    </CartContext.Provider>
  )
}
