import React, { useState, useEffect } from 'react';
import { getTodos, 
    deleteTodo 
} from './services/Api.js';//in frontend , we should keep all api calling in a services file(best practice)

const TodoList = ({ onEdit }) => {
    const [todos, setTodos] = useState([]);
    console.log(todos,'initial todo array');
    

    useEffect(() => {
        loadTodos();
        console.log(todos,'after useeffect todo array');

    }, []);

    const loadTodos = async () => {//using async function because we dont know the exact time to get all todos from database
        const response = await getTodos();// if 1 todo is present it will take less time than 1000 todo present in database
        setTodos(response.data);
    };

    const handleDelete = async (id) => {
        await deleteTodo(id);
        loadTodos();  // Reload the todos after deletion
    };

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo._id}>
                        <span>{todo.title}</span> -{'>'} 
                        <strong>{todo.completed ? ' Completed' : ' Not Completed'}</strong>
                        <button
                         onClick={() => onEdit(todo)}
                         >Edit</button>
                        <button 
                        onClick={() =>
                             handleDelete(todo._id)
                            }
                             >Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;