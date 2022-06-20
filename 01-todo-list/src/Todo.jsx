import React from "react";

export default function Todo({ todo, toggleTodo, removeTodo }) {
  function handleClick() {
    toggleTodo(todo.id);
  }

  function handleRemove() {
    removeTodo(todo.id);
  }

  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" name="" id="" onClick={handleClick} />
      <li
        style={{
          color: "white",
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </li>
      <button onClick={handleRemove}>X</button>
    </div>
  );
}
