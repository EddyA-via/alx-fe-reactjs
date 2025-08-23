// src/components/TodoList.jsx
import React from "react";

export default function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <p data-testid="empty-message">No todos available</p>;
  }

  return (
    <ul data-testid="todo-list">
      {todos.map((todo, index) => (
        <li key={index} data-testid="todo-item">
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            onClick={() => onToggle(index)}
          >
            {todo.text}
          </span>
          <button
            data-testid={`delete-btn-${index}`}
            onClick={() => onDelete(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
