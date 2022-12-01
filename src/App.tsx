import { useState } from 'react'
import './App.css'
import InputField from './components/InputField'

function App() {
  const [count, setCount] = useState(0)

  return <InputField type="text" name="some-shit"></InputField>
}

export default App
