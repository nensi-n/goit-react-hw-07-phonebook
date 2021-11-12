import "../Filter/Filter.css";
import { filterContacts } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { filterValue } from "../../redux/selectors";

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(filterValue);

  return (
    <input
      type="text"
      name="filter"
      onChange={(e) => dispatch(filterContacts(e.target.value))}
      value={filter}
    />
  );
}

export default Filter;
