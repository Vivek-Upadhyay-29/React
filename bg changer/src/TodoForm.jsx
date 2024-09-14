import React, { useState, useEffect } from 'react';
import { createTodo, updateTodo } from './services/Api.js';

const TodoForm = ({ todoToEdit, onFormSubmit }) => {
    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        // If there's a task to edit, prefill the form fields
        if (todoToEdit) {
            setTitle(todoToEdit.title);
            setCompleted(todoToEdit.completed);
        }
    }, [todoToEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create the new task object
        const newTodo = { title, completed };

        // If editing, call update; otherwise, call create
        if (todoToEdit) {
            await updateTodo(todoToEdit._id, newTodo);
        } else {
            await createTodo(newTodo);
        }

        // Reset form after submission
        setTitle('');
        setCompleted(false);
        onFormSubmit();  // To reload the list or indicate form submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{todoToEdit ? 'Edit Todo' : 'Add Todo'}</h2>
            <input 
                type="text" 
                placeholder="Enter todo title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required
            />
            <label>
                Completed:
                <input 
                    type="checkbox" 
                    checked={completed} 
                    onChange={() => setCompleted(!completed)}  // Toggle completed state
                />
            </label>
            <button type="submit">
                {todoToEdit ? 'Update' : 'Add'} Todo
            </button>
        </form>
    );
};

export default TodoForm;