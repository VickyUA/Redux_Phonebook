import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contactsSlice";
import filterReducer from "./filtersSlice";

const persistConfigContact = {
  key: "contacts",
  storage,
};

const persistConfigFilter = {
  key: "filter",
  storage,
};

const persistedContactsReducer = persistReducer(
  persistConfigContact,
  contactsReducer
);
const persistedFilterReducer = persistReducer(
  persistConfigFilter,
  filterReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: persistedFilterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
