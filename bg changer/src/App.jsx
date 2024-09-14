// import { useState,useEffect } from "react"
// import { getTodos } from "./services/Api";
// import Todo from "./Todo";
// const App = ({ onEdit }) => {
//   const [todos, setTodos] = useState([]);
//   console.log(todos,'initial todo array');
  

//   useEffect(() => {
//       loadTodos();
//       console.log(todos,'after useeffect todo array');

//   }, []);

//   const loadTodos = async () => {//using async function because we dont know the exact time to get all todos from database
//       const response = await getTodos();// if 1 todo is present it will take less time than 1000 todo present in database
//       setTodos(response.data);
//   };

//   return (
   
    
//     //  <div className="max-h-screen"
//     //   style ={{backgroundColor: color}}>  
//     //   <div className="fixed flex flex-wrap justify-center align-bottom  insert-x-0 px-2 ">
//     //   <div className="flex flex-wrap justify-center gap-3 shadow-l  bg-white px-3 py-2 rounded-3xl"> 
//     //   <button onClick={()=>{setColor("red")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//     //   style={{backgroundColor : "red"}}>  Red</button>

//     //   <button onClick={()=>{
//     //     setColor("purple")
//     //   }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//     //   style={{backgroundColor : "pink"}}>  Purple </button>

//     //   <button  onClick={()=>{setColor("green")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//     //   style={{backgroundColor : "green"}}>  green </button>

//     //   <button onClick={()=>{
//     //     setColor("yellow")
//     //   }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//     //   style={{backgroundColor : "yellow"}}>  yellow</button>
//     //     </div>
//     //   </div>
//     //   </div>
// <>
// <div>
//     <Todo />
//             <h2>Todo List</h2>
//             <ul>
//                 {todos.map(todo => (
//                     <li key={todo._id}>
//                         <span>{todo.title}</span> -{'>'} 
//                         <strong>{todo.completed ? ' Completed' : ' Not Completed'}</strong>
//                         <button
//                         //  onClick={() => onEdit(todo)}
//                          >Edit</button>
//                         <button 
//                         // onClick={() =>
//                         //      handleDelete(todo._id)
//                         //     }
//                              >Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>

// </>
  
     
//   )
// }

// export default App
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './Todo';
function App() {
    const [todoToEdit, setTodoToEdit] = useState(null);

    const handleEdit = (todo) => {
        setTodoToEdit(todo);  // Set the selected todo for editing
    };

    const handleFormSubmit = () => {
        setTodoToEdit(null);  // Reset the form after submission
    };

    return (
        <div className="App">
            <TodoForm todoToEdit={todoToEdit} onFormSubmit={handleFormSubmit} />
            <TodoList onEdit={handleEdit} />
        </div>
    );
}

export default App;