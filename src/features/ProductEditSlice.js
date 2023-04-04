import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
};

const productEditSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { addProduct } = productEditSlice.actions;
export default productEditSlice.reducer;
