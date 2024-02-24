import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import initContacts from '../helpers/initialContacts.json'

const persistConfig = {
    key: 'contacts',
    storage,
}

const contactsSlice = createSlice(
    {
        name: 'contacts',
        initialState: {
            data: initContacts,
            isLoading: false,
            error: null,
        },
        reducers: {
            fethingInProgress(state, action) {
                state.isLoading = true;
            },
            fetchingSuccess(state, action) {
                state.isLoading = false;
                state.error =  null;;
                state.data = action.payload;
            },
            fetchingError(state, action) {
                state.isLoading = false;
                state.state = action.payload;
            }
            // addContact: (state, addContact) => { 
            //     state.data.push(addContact.payload) 
            // },
            // removeContact: (state, action) => { 
            //     state.data = state.data.filter(contact => contact.id !== action.payload);
            // }
        }
    }
)
// export const { addContact, removeContact } = contactsSlice.actions;
export const { fethingInProgress, fetchingSuccess, fetchingError } = contactsSlice.actions;
export const contactsReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
)