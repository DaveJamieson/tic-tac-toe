import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameBoard from './gameBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GameBoard/>
    </>
  )
}

export default App
