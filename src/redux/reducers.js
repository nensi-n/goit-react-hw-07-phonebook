import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const filter = createReducer("", {
  [actions.filterContacts]: (_, payload) => payload,
});

export default filter;
