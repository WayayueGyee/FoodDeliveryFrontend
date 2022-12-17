import LoginPage, { loginAction } from 'components/auth/LoginPage'
import RegistrationPage, { registrationAction } from 'components/auth/RegistrationPage'
import { cartLoader } from 'components/cart/CartPage'
import CartPageWrapper from 'components/cart/CartPageWrapper'
import DishItemPage, { dishItemLoader } from 'components/dishes/DishItemPage'
import { dishMenuLoader } from 'components/dishes/DishMenu'
import { addToCartAction } from 'components/dishes/DishMenuItem'
import DishMenuPage from 'components/dishes/DishMenuPage'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { cartUrl, dishesUrl, dishUrl, loginUrl, ordersUrl, registerUrl } from 'routes/Routes'
import App from './App'
import ErrorPage from './ErrorPage'
import './index.css'

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: dishesUrl,
            element: <DishMenuPage />,
            loader: dishMenuLoader,
            action: addToCartAction,
          },
          {
            path: dishUrl,
            element: <DishItemPage />,
            loader: dishItemLoader,
            action: addToCartAction,
          },
          {
            path: cartUrl,
            element: <CartPageWrapper />,
            loader: cartLoader,
          },
          {
            path: ordersUrl,
          },
          {
            path: registerUrl,
            element: <RegistrationPage />,
            action: registrationAction,
          },
          {
            path: loginUrl,
            element: <LoginPage />,
            action: loginAction,
          },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
