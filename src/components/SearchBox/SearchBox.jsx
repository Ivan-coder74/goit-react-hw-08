import css from "./Search.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { setFilterName } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);
  
  
    const handleChange = (e) => {
  const value = e.target.value.trim();
  const action = setFilterName(value);
  dispatch(action);
    };
  
    return (
      <div className={css.searchBoxContainer}>
        <p className={css.formLabel}>Find contacts by name</p>
        <input
          className={css.formInput}
          type="text"
          value={filter}
          onChange={handleChange}
          placeholder="Search Contacts..."
        />
      </div>
    );
  };
  
  export default SearchBox;