import React from "react";

const Button = ({ onClick, text }) => {
  return (
    <button className="todo-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
