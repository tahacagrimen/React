import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  toggleTodo,
  removeTodo,
  getTodosAsync,
} from "../redux/todos/todosSlice";

let filtered;

function TodoList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todos.items);
  console.log(items);
  const activeFilter = useSelector((state) => state.todos.activeFilter);
  const isLoading = useSelector((state) => state.todos.isLoading);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  filtered = items;

  if (activeFilter !== "all") {
    filtered = items.filter((todo) =>
      activeFilter === "active"
        ? todo.completed == false && todo
        : todo.completed == true && todo
    );
  }
  console.log(activeFilter);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <ul className="todo-list">
      {filtered.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => {
                console.log("toggle");
                dispatch(toggleTodo({ id: item.id }));
              }}
            />
            <label>{item.title}</label>
            <button
              onClick={() => dispatch(removeTodo({ id: item.id }))}
              className="destroy"
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
