import { useState } from 'react'

function App() {
  var  [counter, setCounter] = useState(8)
  var [color, setColor] = useState("blue")


 const addValue = ()=>{
  counter = counter +1;
  setCounter(counter)
 }
 const reduceValue = ()=>{
  counter = counter-1 ;
  setCounter(counter)
 }
 const bothclick=()=>{
  addValue()
 }
  return (
    <>
    <section  id='main' style={{backgroundColor: color}}>
    <div id="change">
      <h1 className="h1tag" > Counter {counter} </h1>
    <button  className="button"  onClick={addValue}> Add Value </button>
    <button className= "button " onClick={reduceValue}> Reduce Value </button>

    <button className="button bg-blue-500 text-white px-4 py-2" onClick={()=>{
      setColor("green")
    }} style={{backgroundColor:"green"}} >  Green </button>


     <button className="button bg-blue-500 text-white px-4 py-2" onClick={()=>{
      setColor("pink")
    }} style={{backgroundColor:"pink"}} >  pink </button>


     <button className="button bg-blue-500 text-white px-4 py-2 hover:bg-blue-700 focus:outline-none" onClick={()=>{
      setColor("yellow")
    }} style={{backgroundColor:"yellow"}} >  yellow </button>


    <button  class ="my-custom-button" className="button bg-blue-500 text-white px-4 py-2" onClick={()=>{
      setColor("orange")
    }} style={{backgroundColor:"orange"}} >  orange </button>

    </div>
      
    </section>
    
    </>
  )
}

export default App
