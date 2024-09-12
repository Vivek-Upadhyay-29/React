import { useState, useEffect } from 'react'
import { Button, Modal } from 'bootstrap';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {  
 

  const [data, setData]= useState([]);
  useEffect(() => {
    let url = `https://jsonplaceholder.typicode.com/posts`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, []);




  return (
<div className='conatiner w-full' > 
<div className='header w-full'><h1 className='text-center bg-black text-white'>Vivek Fetch API</h1></div>

<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">UserID</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
  {data.slice(0,7).map((item)=>{
    return(
      <>
      <tr>
       <th>{item.id}</th>
       <th>{item.userId}</th>
       <th>{item.title}</th>
       <th> {item.body}</th>
      </tr>
      
      </>
    )
  })}
</table>
</div>
   
  )
}

export default App