import 'App.css'
import NavBar from 'components/navbar/NavBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

interface UserInfoType {
  token: string
  email: string
  imgLink?: string
}

const UserInfoContext = React.createContext({
  email: 'basic@mail.com',
  imgLink:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
})

function UserInfoProvider() {
  return
}

function App() {
  return (
    <>
      <NavBar />
      <div style={{ backgroundColor: 'violet', height: 1000 + 'px' }}></div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
