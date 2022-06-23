import React, { useState } from "react";

function Form({ addContacts, contacts }) {
  const [form, setForm] = useState({
    fullname: "",
    phone: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname.trim() === "" || form.phone.trim() === "") {
      alert("Please fill all fields");
      return;
    }

    addContacts([...contacts, form]);

    setForm({
      fullname: "",
      phone: "",
    });
  };

  const onChangeInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Full Name"
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="phone"
          placeholder="Phone Number"
          onChange={onChangeInput}
          value={form.phone}
        />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
