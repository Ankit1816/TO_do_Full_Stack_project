import axios from "axios";
import React, { useState } from "react";

const TodoItem = ({ todo, fetchTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [startDate, setStartDate] = useState(todo.startDate);
  const [endDate, setEndDate] = useState(todo.endDate);

  const handleUpdate = async () => {
    await axios.put(`http://localhost:5000/api/todos/${todo._id}`, {
      title,
      startDate,
      endDate,
    });
    setIsEditing(false);
    fetchTodos();
  };

  return (
    <div>
      {isEditing ? (
        <div class="edit">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <br />
          <button onClick={handleUpdate}>Update</button>
        </div>
      ) : (
        <div>
          <h3>{todo.title}</h3>
          <p>
            {new Date(todo.startDate).toLocaleDateString()} -{" "}
            {new Date(todo.endDate).toLocaleDateString()}
          </p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
