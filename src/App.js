import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Container from "./components/Container/Container";
import Filter from "./components/Filter/Filter";
import { useState } from "react";
import { useGetContactsQuery } from "./redux/phonebookApi";

function App() {
  const { data } = useGetContactsQuery("");

  const [filter, setFilter] = useState("");

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const contactFilter = () => {
    return data.filter((contact) =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      {data && <ContactForm contacts={data} />}
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      {data && <ContactList contacts={contactFilter()} />}
    </Container>
  );
}

export default App;
