import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContacts } from "./actions";

const contacts = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filter = createReducer("", {
  [filterContacts]: (_, action) => action.payload,
});

const rootReducer = combineReducers({ contacts, filter });

export default rootReducer;
