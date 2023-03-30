import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import productSlice from "../features/productSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    products: productSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
