import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQty: 0,
    cartChanged: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQty = action.payload.totalQty;
      state.items = action.payload.items;
    },
    addItem(state, action) {
      console.log("payload", action.payload);
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQty++;
      state.cartChanged = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          qty: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.qty++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
      //console.log("items state", state.items);
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQty--;
      if (existingItem.qty === 1) {
        state.items = state.items.filter((item) => item.id != id);
      } else {
        existingItem.qty--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.cartChanged = true;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
