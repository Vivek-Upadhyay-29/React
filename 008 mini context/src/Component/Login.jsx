import React,{useState, useContext} from 'react';
import UserContextProvider from '../Context/UserContext';
import UserContext from '../Context/UserContext'


function Login() {
const [username , setUsername] = useState('')
const [password , setPassword] = useState('')
const {setUser} = useContext(UserContext)
const handleSubmit = ()=>{
e.preventDefault()
setUser({username,password})

}
  return (
    <div>
        <input value={username}
        onChange={(e)=>{setUsername(e.target.value) }}
        
        type='text' placeholder='username' />
        
        <input value={password} onChange={(e)=>{ setPassword(e.target.value)}} 
        type='text' placeholder='password'/>

       <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login