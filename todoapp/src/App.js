import React, { useState } from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";
import './style.css';

const App = () => {
  const [todos, setTodos] = useState(["Eat", "Code", "Sleep", "Repeat"]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <Header />
      {todos.map((todo, index) => (
        <TodoItem key={index} text={todo} onDelete={() => handleDeleteTodo(index)} />
      ))}
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="Add a new todo" 
      />
      <Button onClick={handleAddTodo} text="Add Todo" />
    </div>
  );
};

export default App;
