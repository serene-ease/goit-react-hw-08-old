
import { useDispatch } from "react-redux";

///////////////Styles///////////////////
import { FiPhone, FiUser } from "react-icons/fi";
import style from '../Contact/Contact.module.css';
////////////////////////////////////////
const Contact = ({ contact: { name, phone, id } }) => {
  const dispatch = useDispatch();
  const handleRemove = () => dispatch(removeContact(id))

  return (
    <div className={style.container}>
      <div>
        <p><FiUser className={style.icon} />{name}</p>
        <p><FiPhone className={style.icon} />{phone}</p>
      </div>
      <button className={style.buttons} onClick={handleRemove}>Delete</button>
    </div>
  );
};


export default Contact