import "../Filter/Filter.css";

function Filter({ value, onChange }) {
  return (
    <input
      type="text"
      name="filter"
      placeholder="Filter: enter some letters to search contact"
      value={value}
      onChange={onChange}
    />
  );
}

export default Filter;
