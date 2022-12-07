import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import App from './App'
import LoginPage from './components/authentication/LoginPage'
import RegistrationPage from './components/authentication/RegistrationPage'
import ErrorPage from './ErrorPage'
import './index.css'

// https://reactrouter.com/en/main/start/tutorial#the-contact-route-ui
const router = createBrowserRouter([
  { path: '/', element: <Navigate to={'/api'} />, errorElement: <ErrorPage /> },
  {
    path: '/api',
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
