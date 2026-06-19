// Central Redux store for the app. Every slice gets registered here.
import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "./booksSlice";

const store = configureStore({
  reducer: {
    library: libraryReducer,
  },
});

export default store;
