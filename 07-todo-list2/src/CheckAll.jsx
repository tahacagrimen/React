import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function CheckAll({ todos, checked }) {
  let visible;
  if (todos.length > 0) {
    visible = (
      <div className="flex justify-center align-center">
        <button>
          <IoIosArrowDown size={28} />
        </button>
      </div>
    );
  }

  function toggleTodo() {
    checked = !checked;
    console.log(checked);
  }

  return <div onClick={toggleTodo}>{visible}</div>;
}

export default CheckAll;
