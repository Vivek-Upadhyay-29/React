import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componet/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Card username = "Kashish" btnText = "get me"/>
   <br />
   <Card username = "Anuradha"  />
    </>
  )
} 

export default App
