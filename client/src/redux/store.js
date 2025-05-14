// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage için
// veya sessionStorage için:
// import storageSession from 'redux-persist/lib/storage/session'

import userReducer from "./user/userSlice";

// Persist konfigürasyonu
const persistConfig = {
  key: "root", // BU ANAHTAR ZORUNLUDUR
  storage,
  // Sadece belirli reducer'ları persist yapmak isterseniz:
  // whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
});

export const persistor = persistStore(store);
