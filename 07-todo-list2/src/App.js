import React, { useState } from "react";
import "./App.css";
import Input from "./Input";
import List from "./List";
import CheckAll from "./CheckAll";

function App() {
  const [todos, setTodos] = useState([
    "Learn React",
    "Learn TypeScript",
    "Learn NodeJS",
  ]);
  const checked = false;

  console.log(checked);

  return (
    <div className="App flex justify-center align-center flex-col h-screen">
      <h1>todos</h1>
      <div className="flex justify-center align-center">
        <CheckAll checked={checked} todos={todos} />
        <Input addtodos={setTodos} todos={todos} />
      </div>

      <List todos={todos} />
    </div>
  );
}

export default App;
