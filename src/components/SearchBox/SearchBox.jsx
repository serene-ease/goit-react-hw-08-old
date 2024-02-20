
import { useId } from 'react';
import s from './SearchBox.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/filterSlice'

export const SearchBox = () => {
  const dispatch = useDispatch();
  const handleChange = event => dispatch(filterContact(event.target.value))
  const value = useSelector(state => state.filter);
  const cUserId = useId();
  return (
    <div className={s.container}>
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
