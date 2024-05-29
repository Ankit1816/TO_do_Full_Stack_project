import React, { useState } from "react";
import "./index";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>To-Do App</h1>
        <TodoForm onSubmit={addTodo} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
