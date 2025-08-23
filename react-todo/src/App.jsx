// src/App.jsx
import React from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import TestingComponent from "./components/TestingComponent";

export default function App() {
  return (
    <div className="app-container">
      <h1>React Todo App</h1>
      <AddTodoForm />
      <TodoList />
      
      {/* ✅ Add Testing Component */}
      <TestingComponent />
    </div>
  );
}
