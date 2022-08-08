import React from "react";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

function Item({ item }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(item.id));
  };

  return (
    <div className="contactList">
      <div>{item.name}</div>
      <div>{item.number}</div>
      <div className="deleteBtn" onClick={handleDelete}>
        X
      </div>
    </div>
  );
}

export default Item;
