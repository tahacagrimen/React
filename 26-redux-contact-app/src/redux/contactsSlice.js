import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactsAdapter = createEntityAdapter();

const initialState = contactsAdapter.getInitialState();

export const contactsSelectors = contactsAdapter.getSelectors(
  (state) => state.contacts
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: contactsAdapter.addOne,
    addContacts: contactsAdapter.addMany,
    deleteContact: contactsAdapter.removeOne,
  },
});

export const { addContact, addContacts, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
