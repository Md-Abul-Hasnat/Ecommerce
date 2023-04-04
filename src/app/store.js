import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import productSlice from "../features/productSlice";
import productEditSlice from "../features/ProductEditSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    products: productSlice,
    edit: productEditSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
