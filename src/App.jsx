import { useState } from "react";
import ContactForm from "./components/contactForm/ContactForm";
import ContactList from "./components/contactList/ContactList";
import SearchBox from "./components/searchBox/SearchBox";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const fieldValidation = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short! Name must be at least 3 characters.")
    .max(50, "Too Long! Name must be 50 characters or less.")
    .required("Name is required"),
  number: Yup.string()
    .min(2, "Too Short! Number must be at least 3 characters.")
    .max(50, "Too Long! Number must be 50 characters or less.")
    .required("Number is required!")
    .trim()
    .matches(/^[0-9()\-\s]+$/, "Only numbers, dashes, spaces, and parentheses are allowed"),
});

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
    const updateContacts = [...contacts, { id: newId, ...newContact }];
    setContacts(updateContacts);
  };

  const handleSubmit = (value, actions) => {
    addContact(value);
    actions.resetForm();
  };

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
