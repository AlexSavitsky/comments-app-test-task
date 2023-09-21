import { createSlice } from "@reduxjs/toolkit";

const LS_ITEMS_KEY = "items-key";

const initialState = {
  items: JSON.parse(localStorage.getItem(LS_ITEMS_KEY) ?? "[]"),
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
      localStorage.setItem(LS_ITEMS_KEY, JSON.stringify(state.items));
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem(LS_ITEMS_KEY, JSON.stringify(state.items));
    },
    changeCurrent(state, action) {
      state.items.filter((item) =>
        item.id === action.payload
          ? (item.current = true)
          : (item.current = false)
      );
      localStorage.setItem(LS_ITEMS_KEY, JSON.stringify(state.items));
    },
    addComment(state, action) {
      const { id, comment } = action.payload;
      state.items.map((item) =>
        item.id === id ? item.comments.push(comment) : null
      );
      localStorage.setItem(LS_ITEMS_KEY, JSON.stringify(state.items));
    },
  },
});

export const itemsActions = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;
