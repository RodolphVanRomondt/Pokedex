import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Pokedex from "./Pokedex.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Pokedex</h1>
      <Pokedex />
    </>
  )
}

export default App
