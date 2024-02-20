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
            data: initContacts
        },
        reducers: {
            add: (state, addContact) => { state.push(addContact.payload) },
            remove: (state, removeContact) => { state.splice(state.items.findIndex((item) => item.id === removeContact.payload), 1) }
        }
    }
)
export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
)