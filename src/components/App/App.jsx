///////////////Library//////////////
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
///////////////Slices///////////////
import { fetchContacts } from "../../redux/operations.js";
import { selectorContacts, selectorIsLoading, selectorError } from "../../redux/selectors.js";
/////////////Components/////////////
import ContactForm from '../ContactForm/ContactForm.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';

export default function App() {
  const dispatch = useDispatch();
  // const { data, isLoading, error } = useSelector(selectorContacts)
  const isLoading = useSelector(selectorIsLoading);
  const error = useSelector(selectorError)

  //Call an operation
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  return (
    <div >
      <h1 >Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <SearchBox />
      <ContactList />
    </div>
  )
}


