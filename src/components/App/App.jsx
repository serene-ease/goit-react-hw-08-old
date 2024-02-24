///////////////Library//////////////
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
///////////////Slices///////////////
import { fetchContacts } from "../../redux/operations.js";
import { selectContacts, selectIsLoading, selectError } from "../../redux/selectors.js";
/////////////Components/////////////
import ContactForm from '../ContactForm/ContactForm.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';

export default function App() {
  const dispatch = useDispatch();
  // const { data, isLoading, error } = useSelect(selectorContacts)
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError)

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


