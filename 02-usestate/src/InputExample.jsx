import React, { useState } from "react";

export default function InputExample() {
  const [name, setName] = useState("Taha");
  const [surname, setSurname] = useState("Taha");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeSurname = (e) => {
    setSurname(e.target.value);
  };

  return (
    <div>
      <h4>Please enter a name</h4>
      <input value={name} onChange={onChangeName} />
      <h4>Please enter a surname</h4>
      <input value={surname} onChange={onChangeSurname} />
      <h3 style={{ color: "red" }}>
        {name} {surname}
      </h3>
    </div>
  );
}
