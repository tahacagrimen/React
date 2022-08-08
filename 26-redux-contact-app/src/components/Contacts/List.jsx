import React from "react";
import { contactsSelectors } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";
import Item from "./Item";

function List() {
  const contacts = useSelector(contactsSelectors.selectAll);

  return (
    <div>
      {contacts.map((contact) => (
        <Item key={contact.id} item={contact} />
      ))}
    </div>
  );
}

export default List;
