import "../ContactList/ContactList.css";
import { useDeleteContactMutation } from "../../redux/phonebookApi";

function ContactList({ contacts }) {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <li key={contact.id}>
          <p>Name: {contact.name}</p>
          <p>Number: {contact.number}</p>
          <button type="button" onClick={() => deleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
