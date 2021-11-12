export default function contactFilter(contacts, filter) {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.trim().toLowerCase())
  );
}
