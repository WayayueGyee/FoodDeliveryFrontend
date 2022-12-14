import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import App from './App'
import LoginPage, { loginAction } from 'components/auth/LoginPage'
import RegistrationPage, { registrationAction } from 'components/auth/RegistrationPage'
import ErrorPage from './ErrorPage'
import './index.css'
import { cartUrl, dishesUrl, loginUrl, ordersUrl, registerUrl } from 'routes/Routes'

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
            element: (
              <div>
                <Outlet />
              </div>
            ),
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
