import React from "react";
import User from "./User";

function App() {
  return (
    <>
      <User
        name="Taha Çağrı"
        surname="Men"
        isLoggedIn={true}
        age={27}
        friends={["Cem", "Fatih", "Zeyd", "Burak"]}
        address={{
          title: "İzmir",
          zip: 35320,
        }}
      />
    </>
  );
}

export default App;
