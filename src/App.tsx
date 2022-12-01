import { useState } from 'react'
import './App.css'
import InputField from './components/InputField'

function App() {
  const [count, setCount] = useState(0)

  return <InputField name="some-shit" labelText="Some Shit"></InputField>
}

export default App
