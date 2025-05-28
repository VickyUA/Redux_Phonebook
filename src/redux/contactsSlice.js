import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    filterContacts(state, action) {
      state.items = state.items.name
        .toLowerCase()
        .includes(String(action.payload));
    },
  },
});

export const { addContact, deleteContact, filterContacts } = slice.actions;

export default slice.reducer;
