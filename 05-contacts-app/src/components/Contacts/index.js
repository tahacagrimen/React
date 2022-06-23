import React, { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "John Doe",
      phone: "1234567890",
    },
    {
      fullname: "Jane Doe",
      phone: "1234567890",
    },
    {
      fullname: "Jack Doe",
      phone: "1234567890",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div>
      <List contacts={contacts} />
      <Form addContacts={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
