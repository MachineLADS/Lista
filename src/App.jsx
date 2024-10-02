import { useState } from 'react'

import './App.css'
import Lista1 from './ComponentesL.jsx/Lista1'
import Lista2 from './ComponentesL.jsx/Lista2'
import Lista3 from './ComponentesL.jsx/Lista3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Lista1/>
    <Lista2/>
    <Lista3/>
    </>
  )
}

export default App
