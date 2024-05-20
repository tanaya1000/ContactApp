import React, { useState } from "react";

const AddContact = ({ addContact }) => {
  const [contacts, setContacts] = useState({
    name: "",
    email: "",
  });

  // const handleChange = (e) => {
  //   if (e.target.name === "name") {
  //     setContacts({ ...contacts, name: e.target.value });
  //   } else {
  //     setContacts({ ...contacts, email: e.target.value });
  //   }
  // };

  const handleAdd = (e) => {
    e.preventDefault();
    if (contacts.name === "" || contacts.email === "") {
      alert("please fill all the details");
      return;
    }
    console.log(contacts);
    addContact(contacts);
    setContacts({ name: " ", email: "" });
  };
  return (
    <div className="container mt-4">
      <h3>Add Contacts</h3>
      <form>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control w-50"
            value={contacts.name}
            onChange={(e) => setContacts({ ...contacts, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control w-50"
            value={contacts.email}
            onChange={(e) =>
              setContacts({ ...contacts, email: e.target.value })
            }
          />
        </div>
        <button className="btn btn-warning" onClick={handleAdd}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;
