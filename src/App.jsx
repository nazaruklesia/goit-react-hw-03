import { useState } from "react";
import ContactForm from "./components/contactForm/ContactForm";
import ContactList from "./components/contactList/ContactList";
import SearchBox from "./components/searchBox/SearchBox";
import { nanoid } from "nanoid";

import * as Yup from "yup";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const addContact = (newContact) => {
    const newId = nanoid();
    const updateContacts = [...contacts, { id: newId, name: newContact.name, number: newContact.number }];
    setContacts(updateContacts);
  };

  const handleSubmit = (value, actions) => {
    addContact(value);
    actions.resetForm();
  };

  const fieldValidation = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm setContacts={setContacts} addContact={addContact} handleSubmit={handleSubmit} fieldValidation={fieldValidation} />
      <SearchBox value={searchQuery} onChange={handleSearch} />
      <ContactList contacts={filterContacts} />
    </div>
  );
};

export default App;
