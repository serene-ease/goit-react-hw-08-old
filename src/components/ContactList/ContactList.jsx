import { useSelector } from 'react-redux';
import  Contact  from '../Contact/Contact';
import style from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.data);
  console.log(contacts)
  const filter = useSelector(state => state.filters);
  const requestedContacts = contacts.filter(item => item.contactname.toLowerCase().includes(filter.toLowerCase()))


  return (
    <ul className={style.list} >
      {requestedContacts.map(contact => (
        <li className={style.listItem} key={contact.id}>
          <Contact contact={contact}/>
        </li>
      ))}
    </ul>
  );
};

export default ContactList


// const requestedContacts = contacts.filter(contact =>
  // contact.contactname.toLowerCase().includes(filter.toLowerCase()));