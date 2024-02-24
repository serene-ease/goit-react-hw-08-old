
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/filterSlice'
import { selectFilter } from '../../redux/selectors'
import style from './SearchBox.module.css'

const SearchBox = () => {
  //////////////////////////////
  const dispatch = useDispatch();
  const handleChange = event => dispatch(filterContact(event.target.value))
  const value = useSelector(selectFilter);
  const cUserId = useId();
  return (
    <div className={style.container}>
      <label htmlFor={cUserId}>Find contacts by name</label>
      <input
        id={cUserId}
        type="text"
        name="contact"
        value={value}
        onChange={handleChange} />
    </div>
  );
};
export default SearchBox