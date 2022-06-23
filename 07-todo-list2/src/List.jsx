import React from "react";

function List({ todos, checked }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <div className={`${checked ? "line-through" : ""}`} key={index}>
          {todo}
        </div>
      ))}
    </div>
  );
}

export default List;
