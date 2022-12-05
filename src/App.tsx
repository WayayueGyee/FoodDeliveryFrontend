import { useState } from 'react'
import './App.css'
import Button from './components/primitives/Button'
import InputField from './components/primitives/InputField'
import Select from './components/primitives/Select'
import RegistrationPage from './components/authentication/RegistrationPage'
import Card from './components/primitives/Card'
import LoginPage from './components/authentication/LoginPage'
import DatePicker from './components/primitives/DatePicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <div>
    //   <InputField name="some-shit" labelText="Some Shit"></InputField>{' '}
    //   <Button style="primary">Coooooolest text ever!</Button>
    // </div>

    <>
      <RegistrationPage></RegistrationPage>
      <LoginPage></LoginPage>
    </>

    // <div>
    //   <DatePicker></DatePicker>
    //   <InputField type="text" name="some-input" labelText="Some Input"></InputField>
    // </div>
  )
}

export default App
