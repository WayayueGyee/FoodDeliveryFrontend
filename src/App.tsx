import 'App.css'
import NavBar from 'components/navbar/NavBar'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

interface UserInfoType {
  token: string | null
  setToken: React.Dispatch<React.SetStateAction<string | null>>
}

export const UserInfoContext = React.createContext<UserInfoType | null>(null)

function App() {
  const [token, setToken] = useState<string | null>(null)

  return (
    <>
      <UserInfoContext.Provider
        value={{
          token,
          setToken,
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
