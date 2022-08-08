import React from "react";
import Form from "./Form";
import List from "./List";

import { useSelector } from "react-redux";
import { contactsSelectors } from "../../redux/contactsSlice";

function Contacts() {
  const total = useSelector(contactsSelectors.selectTotal);

  return (
    <div>
      <h1>Contacts ({total})</h1>
      <Form />
      <List />
    </div>
  );
}

export default Contacts;
