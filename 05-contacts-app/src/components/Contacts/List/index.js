import React, { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase());
    });
  });

  console.log(filtered);

  return (
    <div>
      <input
        placeholder="Search"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ul style={{ listStyle: "none" }}>
        {filtered.map((contact, index) => (
          <li key={index}>
            {contact.fullname} - {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
