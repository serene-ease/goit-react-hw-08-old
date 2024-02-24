import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact } from "./operations";

const handlePending = (state) => {
    state.isLoading = true;
}

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = true;
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;;
                state.data = action.payload;
            })
            .addCase(addContact.rejected, handleRejected)
            /////////////////////////////////////////////////////////////////////////////
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;;
                state.data.push(action.payload);
            })
            .addCase(fetchContacts.rejected, handleRejected)
    }

}
)

export const contactsReducer = contactsSlice.reducer;
