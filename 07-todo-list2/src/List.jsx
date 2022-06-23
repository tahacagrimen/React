import React from "react";

function List({ todos }) {
  // Checkbox işaretlendiğinde yazı da üstü çiziliyor.

  function checkbox(e) {
    console.log(e.target.checked);
    if (e.target.checked) {
      e.target.nextSibling.classList.add("line-through");
    }
    if (!e.target.checked) {
      e.target.nextSibling.classList.remove("line-through");
    }
  }

  // İşaretli itemleri silmeye yarıyor.

  function removeSelected(e) {
    let selected = document.querySelectorAll(".line-through");
    selected.forEach((item) => {
      item.parentNode.remove();
      todos.splice(todos.indexOf(item.innerText), 1);
    });
  }

  // Bütün herşeyi görmek için
  function showAll() {
    let items = document.querySelectorAll("hidden");
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
      }
    });
  }

  return (
    <div className="w-full h-auto">
      {todos.map((todo, index) => (
        <div className="flex justify-start items-center" key={index}>
          <input onClick={checkbox} type="checkbox" className="h-4 w-4" />
          <p className="todo-item ml-4">{todo}</p>
        </div>
      ))}

      <div className="flex justify-between items-center mt-4">
        <p>{todos.length} items left</p>
        <div>
          <button onClick={showAll} className="mr-4">
            All
          </button>
          <button onClick={showActive} className="mr-4">
            Active
          </button>
          <button>Completed</button>
        </div>
        <button onClick={removeSelected}>Clear selected</button>
      </div>
    </div>
  );
}

export default List;
