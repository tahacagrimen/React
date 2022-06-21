import React, { useState, useEffect } from "react";

function App() {
  const [resourseType, setResourceType] = useState("posts");

  return (
    <>
      <div>
        <button onClick={() => setResourceType("post")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourseType}</h1>
    </>
  );
}

export default App;
