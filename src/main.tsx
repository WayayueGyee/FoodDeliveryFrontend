import LoginPage, { loginAction } from 'components/auth/LoginPage'
import RegistrationPage, { registrationAction } from 'components/auth/RegistrationPage'
import CartPage, { cartLoader } from 'components/cart/CartPage'
import DishItemPage, { dishItemLoader } from 'components/dishes/DishItemPage'
import { dishMenuLoader } from 'components/dishes/DishMenu'
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
          },
          {
            path: dishUrl,
            element: <DishItemPage />,
            loader: dishItemLoader,
          },
          {
            path: cartUrl,
            element: <CartPage />,
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
