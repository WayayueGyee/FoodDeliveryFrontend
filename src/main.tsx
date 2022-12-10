import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import App from './App'
import LoginPage from './components/auth/LoginPage'
import RegistrationPage from './components/auth/RegistrationPage'
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
            path: 'dish',
            element: (
              <div>
                <Outlet />
              </div>
            ),
          },
          {
            path: 'basket',
          },
          {
            path: 'order',
          },
          {
            path: 'account/register',
            element: <RegistrationPage />,
          },
          {
            path: 'account/login',
            element: <LoginPage />,
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
