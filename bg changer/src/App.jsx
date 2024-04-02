import { useState } from "react"


function App() {
  const[color , setColor] = useState("blue")

  return (
   
    
     <div className="max-h-screen"
      style ={{backgroundColor: color}}>  
      <div className="fixed flex flex-wrap justify-center align-bottom  insert-x-0 px-2 ">
      <div className="flex flex-wrap justify-center gap-3 shadow-l  bg-white px-3 py-2 rounded-3xl"> 
      <button onClick={()=>{setColor("red")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor : "red"}}>  Red</button>

      <button onClick={()=>{
        setColor("pink")
      }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor : "pink"}}>  Pink</button>

      <button  onClick={()=>{setColor("green")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor : "green"}}>  green </button>

      <button onClick={()=>{
        setColor("yellow")
      }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor : "yellow"}}>  yellow</button>
        </div>
      </div>
      </div>

  
     
  )
}

export default App
