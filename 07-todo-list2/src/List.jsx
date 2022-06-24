import React, { useState, useEffect } from "react";

function List({ todos, addtodos }) {
  const [count, setcount] = useState(todos.length);

  useEffect(() => {
    setcount(document.querySelectorAll(".todo-item").length);
  }, [todos]);

  // Checkbox işaretlendiğinde yazı da üstü çiziliyor.

  function checkbox(e) {
    if (e.target.checked) {
      e.target.nextSibling.classList.add("line-through");
      e.target.parentNode.classList.add("checked");
      setcount(count - 1);
    }
    if (!e.target.checked) {
      e.target.nextSibling.classList.remove("line-through");
      e.target.parentNode.classList.remove("checked");
      setcount(count + 1);
    }
  }

  // İşaretli itemleri silmeye yarıyor
  function deleteItem() {
    const checked = document.querySelectorAll(".checked");
    checked.forEach((item) => {
      item.remove();
    });
    setcount(document.querySelectorAll(".todo-item").length);
  }

  // Bütün herşeyi görmek için
  function showAll() {
    let items = document.querySelectorAll(".hidden");
    items.forEach((item) => {
      item.classList.remove("hidden");
    });
  }

  // Yapılacakları görmek için
  function showActive() {
    let items = document.querySelectorAll(".todo-item");
    items.forEach((item) => {
      if (item.classList.contains("line-through")) {
        item.parentNode.classList.add("hidden");
      } else {
        item.parentNode.classList.remove("hidden");
      }
    });
  }

  // Yapılanları görmek için
  function showCompleted() {
    let items = document.querySelectorAll(".todo-item");
    items.forEach((item) => {
      if (!item.classList.contains("line-through")) {
        item.parentNode.classList.add("hidden");
      } else {
        item.parentNode.classList.remove("hidden");
      }
    });
  }

  console.log(count);

  return (
    <div className="w-full h-auto">
      {todos.map((todo, index) => (
        <div
          className="todo-container flex justify-start items-center"
          key={index}
        >
          <input onClick={checkbox} type="checkbox" className="h-4 w-4 ckc" />
          <p className="todo-item ml-4">{todo}</p>
        </div>
      ))}

      <div className="flex justify-between items-center mt-4">
        <p>{count} items left</p>
        <div>
          <button onClick={showAll} className="mr-4">
            All
          </button>
          <button onClick={showActive} className="mr-4">
            Active
          </button>
          <button onClick={showCompleted}>Completed</button>
        </div>
        <button onClick={deleteItem}>Clear selected</button>
      </div>
    </div>
  );
}

export default List;
