import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const PROJECT_KEY = '65da29c3bcc50200fcdcacfd'
axios.defaults.baseURL = `https://${PROJECT_KEY}.mockapi.io`;

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');            
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    });

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            console.log('contact', contact);
            const response = await axios.post('/contacts', contact);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);

export const removeContact =  createAsyncThunk(
    'contacts/removeContact',
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);