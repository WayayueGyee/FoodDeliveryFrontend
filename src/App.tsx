import './App.css'
import NavBar from './components/navbar/NavBar'

const a: {
  [x: string]: number
} = {
  x: 1,
  y: 2,
  z: 3,
}

console.log(a)

function App() {
  return (
    <>
      <NavBar />
    </>
  )
}

export default App
