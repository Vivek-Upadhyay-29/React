import axios from 'axios';// axios is a better alternative of fetch method

const API_URL = 'http://localhost:8000/todo'; // (base URL)
// "a"+"b" = "ab" string concatination
// Fetch all todos
export const getTodos = () => {//normal arrow function
    return axios.get(`${API_URL}/all`);//axios.get('http://localhost:8000/todo/all')
};//we also need to import this function

// Fetch a specific todo by ID
// export const getTodoById = (id) => {
//     return axios.get(${API_URL}/${id});
// };

// Create a new todo
export const createTodo = (todo) => {
    return axios.post(`${API_URL}/new`, todo);
};


// Update a todo by ID
export const updateTodo = (id, updatedTodo) => {
    return axios.put(`${API_URL}/${id}`, updatedTodo);
};  

// Delete a todo by ID
export const deleteTodo = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};