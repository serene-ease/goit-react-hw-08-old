import axios from "axios";
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from "./contactsSlice";

axios.defaults.baseURL = "https://65d9d325bcc50200fcdc2adc.mockapi.io/";

export const fetchContacts = () => async dispatch => {
    try {
        //Loader
        dispatch(fetchingInProgress()); 
        //Http query
        const reponse = await axios.get('/tasks');
        //data processing
        dispatch(fetchingSuccess(reponse.data))
    } catch (error) {
        //error processing
        dispatch(fetchingError(error.message))
    }
}