import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './components/Counter'

function App() {
    const [count, setCount] = useState(0)

    return <Counter />
}

export default App
