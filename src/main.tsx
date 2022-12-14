import LoginPage, { loginAction } from 'components/auth/LoginPage'
import RegistrationPage, { registrationAction } from 'components/auth/RegistrationPage'
import DishMenu, { dishMenuLoader } from 'components/dishes/DishMenu'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { cartUrl, dishesUrl, loginUrl, ordersUrl, registerUrl } from 'routes/Routes'
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
            element: <DishMenu />,
            loader: dishMenuLoader,
          },
          {
            path: cartUrl,
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
