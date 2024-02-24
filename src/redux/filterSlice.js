import { createSlice } from '@reduxjs/toolkit';



const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        name: '',
    },
    reducers: {
        filterContact(state, action) { return action.payload }
    }
})

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;