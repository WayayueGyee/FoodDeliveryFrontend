import 'App.css'
import NavBar from 'components/navbar/NavBar'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

interface UserInfoType {
  token: string | null
  email: string | null
  setToken: React.Dispatch<React.SetStateAction<string | null>>
  setEmail: React.Dispatch<React.SetStateAction<string | null>>
}

export const UserInfoContext = React.createContext<UserInfoType | null>(null)

function App() {
  const [token, setToken] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)

  return (
    <>
      <UserInfoContext.Provider
        value={{
          token,
          email,
          setToken,
          setEmail,
        }}
      >
        <NavBar />
        <div>
          <Outlet />
        </div>
      </UserInfoContext.Provider>
    </>
  )
}

export default App
