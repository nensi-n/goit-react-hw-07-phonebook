import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./phonebookApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({
  reducer: { [contactsApi.reducerPath]: contactsApi.reducer },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  // devTools: true,
  devtools: process.env.NODE_ENV === "development",
});

setupListeners(store.dispatch);

export default store;
