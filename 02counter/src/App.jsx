import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  var [counter,setCounter] = useState(15)
  const addValue = ()=>{
  counter =counter+1;
  setCounter(counter)
  if(counter +1 > 20){
    alert("stop");
  }
  else{
    console.log("continue");
  }
  }

  const reduceValue = ()=>{
    counter = counter-1 ;
    setCounter(counter)
    if(counter -1 < 0 ){
      alert("rukja bhai");
    }
    else {
      console.log("continue")
    }
    

  }
  return (
    <>
      <h2> i ll be fucking good at this bro</h2>
      <h2> counter value : {counter} </h2>
      <button onClick={addValue} >add value</button>
      <button onClick={reduceValue}> decrease value</button>
    </>
  )
}

export default App
