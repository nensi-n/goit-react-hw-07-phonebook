export const getContacts = (state) => state.contacts;
export const filterValue = (state) => state.filter;
export const filteredContacts = ({ contacts, filter }) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  );
};
