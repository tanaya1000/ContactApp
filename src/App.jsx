import { useEffect, useState } from "react";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid4 from "uuid4";

function App() {
  const localStorageKey = "contactData";
  const [contactData, setContactData] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contactData));
  }, [contactData]);

  const addContact = (data) => {
    setContactData([...contactData, { id: uuid4(), data }]);
    console.log("from App", data);
  };
  const removeContact = (id) => {
    const updatedList = contactData.filter((val) => {
      return val.id !== id;
    });
    setContactData(updatedList);
  };
  return (
    <>
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contactData={contactData} removeContact={removeContact} />
    </>
  );
}

export default App;
