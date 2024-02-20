
import { useDispatch } from "react-redux";
import { removeContact } from '../../redux/contactsSlice'
///////////////Styles///////////////////
import { FiPhone, FiUser } from "react-icons/fi";
import style from '../Contact/Contact.module.css';
////////////////////////////////////////
const Contact = ({ contact: { contactname, number, id } }) => {
  const dispatch = useDispatch();
  const handleRemove = () => dispatch(removeContact(id))

  return (
    <div className={style.container}>
      <div>
        <p><FiUser className={style.icon} />{contactname}</p>
        <p><FiPhone className={style.icon} />{number}</p>
      </div>
      <button className={style.buttons} onClick={handleRemove}>Delete</button>
    </div>
  );
};


export default Contact