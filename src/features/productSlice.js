import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    return new Promise((resolve, reject) => {
      onSnapshot(
        collection(db, "Products"),
        (snapshot) => {
          const data = snapshot.docs.map((doc) => {
            return { docID: doc.id, ...doc.data() };
          });
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
);

export default productSlice.reducer;
