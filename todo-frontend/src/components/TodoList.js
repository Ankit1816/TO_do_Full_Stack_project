import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        const response = await axios.get('http://localhost:5000/api/todos');
        setTodos(response.data);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            {todos.map(todo => (
                <TodoItem key={todo._id} todo={todo} fetchTodos={fetchTodos} />
            ))}
        </div>
    );
};

export default TodoList;
