import { selectFilter } from "../../redux/selectors";
import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  const inputProps = {
    className: css.searchBox,
    type: 'text',
    name: 'searchInput',
    id: 'searchField',
  };

  return (
    <div className={css.searchBoxContainer}>
      <label htmlFor="searchField">Find contacts by name</label>
      <input value={filter} {...inputProps} onChange={handleFilterChange} />
    </div>
  );
}

export default SearchBox;
