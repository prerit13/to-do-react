import React from "react";

const TodoItem = ({ text, onDelete }) => {
  return (
    <div className="todo-item">
      <div className="todo-text">{text}</div>
      <button className="todo-button" onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
