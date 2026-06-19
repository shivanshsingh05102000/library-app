// Slice that owns the library's book collection.
// Right now the only mutation the app needs is "insert a freshly added
// book at the top of the list" — more reducers can be added here later
// (e.g. removeBook, updateBook) without touching any components.
import { createSlice } from "@reduxjs/toolkit";
import { bookCatalog } from "../data/books";

const initialState = {
  items: bookCatalog, // seeded with the starter catalog
};

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addNewBook(state, action) {
      // Newest entries should show up first, so we place the incoming
      // book at the front instead of pushing it to the end.
      state.items = [action.payload, ...state.items];
    },
  },
});

export const { addNewBook } = librarySlice.actions;
export default librarySlice.reducer;
