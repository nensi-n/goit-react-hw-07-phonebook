import { useState } from "react";
import "../ContactForm/ContactForm.css";
import { addContact } from "../../redux/actions";
import { getContacts } from "../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import shortid from "shortid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const [state, setState] = useState({ name: "", number: "" });
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const checkRepeatName = (name) => {
    return contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const checkRepeatNumber = (number) => {
    return contacts.find((contact) => contact.number === number);
  };

  const handleSubmite = (e) => {
    e.preventDefault();
    // onSubmite(state);
    if (checkRepeatName(state.name)) {
      toast.info(`'${state.name}' is already in use!`, {
        autoClose: 2500,
      });
    } else if (checkRepeatNumber(state.number)) {
      toast.info(`🤔 ${state.number} is already in use`, {
        autoClose: 2500,
      });
    } else {
      dispatch(addContact({ ...state, id: shortid.generate() }));
      setState({ name: "", number: "" });
    }
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
          value={state.name}
          onChange={handleChange}
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
          value={state.number}
          onChange={handleChange}
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
