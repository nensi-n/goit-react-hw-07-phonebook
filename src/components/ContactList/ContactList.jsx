import "../ContactList/ContactList.css";
import { useDispatch, useSelector } from "react-redux";
import { filteredContacts } from "../../redux/selectors";
import { deleteContact } from "../../redux/actions";

function ContactList() {
  const contacts = useSelector(filteredContacts);
  const dispatch = useDispatch();
  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <li key={contact.id}>
          <p>Name: {contact.name}</p>
          <p>Number: {contact.number}</p>
          <button
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
