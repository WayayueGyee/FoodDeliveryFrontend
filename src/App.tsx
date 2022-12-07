import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/navbar/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
