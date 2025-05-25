import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import css from "./App.module.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [];
  });

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = (value) => {
    setSearchValue(value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts((prevState) => {
      const newPerson = { ...newContact, id: nanoid() };
      return [...prevState, newPerson];
    });
  };

  const deleteContact = (idToDelete) => {
    console.log(idToDelete);

    setContacts((prevState) => {
      return prevState.filter((contact) => contact.id !== idToDelete);
    });
  };

  return (
    <div className={css.appWrapper}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm add={addContact} />
      <SearchBox value={searchValue} onInput={handleChange} />
      <ContactList list={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}
