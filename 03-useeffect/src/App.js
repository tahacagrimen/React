import React, { useState, useEffect } from "react";

function App() {
  // useState ile buttonların stateini oluşturuyoruz.
  // buttonlara bastığımızda state değerini değiştiriyoruz.

  const [resourseType, setResourceType] = useState("posts");

  // items api dan çektiğimiz veriyi ayarlamak için

  const [items, setItems] = useState([]);

  // useEffect ilk önce fonksiyonumuzu alıyor. Fetch ile veriyi çektik. [resourseType] ile ise state'in değişip değişmediğini kontrol ediyoruz.

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourseType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourseType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

export default App;
