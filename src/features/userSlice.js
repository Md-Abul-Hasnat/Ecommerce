import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: JSON.parse(localStorage.getItem("user")) || {} };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = {};
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
