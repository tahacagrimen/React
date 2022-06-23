import React, { useState } from "react";

function Input({ addtodos, todos }) {
  const [value, setValue] = useState("");

  const keyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.trim() === "") {
        return alert("Please enter a todo");
      }

      setValue(e.target.value);
      addtodos([e.target.value, ...todos]);
      e.target.value = "";
    }
  };

  return (
    <div className="h-8 w-full bg-gray-200 rounded-lg shadow-lg flex justify-between items-center hover:border-slate-900 p-2 mb-3">
      <input
        className="outline-none w-4/5 h-5 p-2 bg-gray-200"
        type="text"
        name="todoinput"
        onKeyDown={keyDown}
      />
    </div>
  );
}

export default Input;
