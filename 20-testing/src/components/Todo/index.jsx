import React, { useState } from "react";

const defaultItems = [
  { name: "Item A" },
  { name: "Item B" },
  { name: "Item C" },
];

function Todo() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(defaultItems);

  return (
    <div>
      <br />
      <br />
      <input
        id="input"
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setItems((prev) => [...prev, { name: text }]);
          setText("");
        }}
      >
        Add
      </button>
      <br />
      <br />
      {items.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
}

export default Todo;
