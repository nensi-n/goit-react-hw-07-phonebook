import "../ContactForm/ContactForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useAddContactMutation,
  useGetContactsQuery,
} from "../../redux/phonebookApi";

function ContactForm() {
  const [addContact] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const handleSubmite = (e) => {
    e.preventDefault();
    const name = e.currentTarget.name.value;
    const number = e.currentTarget.number.value;
    const newContact = {
      name,
      number,
    };
    if (
      contacts.find(
        (contact) => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      toast.info(`🤔 "${name}" contact is already in use`);
      e.currentTarget.reset();
      return;
    } else if (contacts.find((contact) => number === contact.number)) {
      toast.info(`🤔 "${number}"" is already in use`, {
        autoClose: 2500,
      });
    }
    addContact(newContact);
    e.currentTarget.reset();
  };

  return (
    <form id="contact" onSubmit={handleSubmite}>
      <label>
        <p>Name:</p>
        <input
          className="input-field"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label>
        <p>Number:</p>
        <input
          className="input-field"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="submit" className="submit-button">
        Add contact
      </button>
      <ToastContainer />
    </form>
  );
}

export default ContactForm;
