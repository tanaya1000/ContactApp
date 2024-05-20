import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const ContactList = (props) => {
  const { contactData, removeContact } = props;
  console.log(contactData, " from contactList");

  //   const contactList = contactData.map((val) => {
  //     return (
  //       <div key={val} className="d-flex">
  //         <div>{val.name}</div>
  //         <div style={{ marginLeft: "25%" }}>{val.email}</div>
  //         <span style={{ marginLeft: "35%" }}>
  //           <DeleteIcon />
  //         </span>
  //       </div>
  //     );
  //   });
  return (
    <>
      <div className="container mt-3">
        <h3>Contact List</h3>
        {contactData.map((val) => {
          return (
            <div
              key={val}
              className="d-flex bg-dark text-white h-25 w-50 p-3 border border-5 mb-2">
              <div>{val.data.name}</div>
              <div style={{ marginLeft: "25%" }}>{val.data.email}</div>
              <span
                style={{ marginLeft: "35%" }}
                onClick={() => removeContact(val.id)}
                className="cursor-pointer">
                <DeleteIcon />
              </span>
            </div>
          );
        })}
      </div>

      {/* <div className="container mt-3">
        <h3>Contact List</h3>
        <div className="bg-dark text-white h-25 w-50 p-3 border border-5 mb-4">
          {contactList}
        </div>
      </div> */}
    </>
  );
};

export default ContactList;
