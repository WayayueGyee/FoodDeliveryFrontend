import { useState } from 'react'
import './App.css'
import Button from './components/primitives/Button'
import InputField from './components/primitives/InputField'
import Select from './components/primitives/Select'
import Registraion from './components/Registraion'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <div>
    //   <InputField name="some-shit" labelText="Some Shit"></InputField>{' '}
    //   <Button style="primary">Coooooolest text ever!</Button>
    // </div>

    <>
      <Registraion></Registraion>
      <Select options={['s', 'd', 'd']}></Select>
    </>
  )
}

export default App
