import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContext'
import Profile from './Component/Profile'
import Login from './Component/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>

     <Login/>
     <Profile/>

    </UserContextProvider>
  )
}

export default App
