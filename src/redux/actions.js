import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

export const deleteContact = createAction("contacts/deleteContact");

export const filterContacts = createAction("contacts/filterContacts");

export const addContact = createAction(
  "contacts/addContact",
  (name, number) => ({
    payload: { id: shortid.generate(), name, number },
  })
);

const actions = { filterContacts, deleteContact, addContact };
export default actions;
