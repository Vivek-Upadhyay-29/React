import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './components/Background'
import Foreground from './components/Foreground'

function App() {  
 

  return (
<div className='relative w-full h-screen bg-zinc-800 m-0 p-0'> 
<Background/>
<Foreground />
</div>
   
  )
}

export default App
