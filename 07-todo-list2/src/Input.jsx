import React, { useState } from "react";

function Input({ addtodos, todos }) {
  const [value, setValue] = useState("");

  const keyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.trim() === "") {
        return alert("Please enter a todo");
      }

      setValue(e.target.value);
      addtodos([...todos, e.target.value]);
      e.target.value = "";
    }
  };

  return (
    <div>
      <input type="text" name="todoinput" onKeyDown={keyDown} />
    </div>
  );
}

export default Input;
