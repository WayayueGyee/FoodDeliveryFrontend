import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import LoginPage from './components/authentication/LoginPage'
import RegistrationPage from './components/authentication/RegistrationPage'
import NavBar from './components/navbar/NavBar'
import ErrorPage from './ErrorPage'
import './index.css'

// https://reactrouter.com/en/main/start/tutorial#the-contact-route-ui
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'registration',
    element: <RegistrationPage />,
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
