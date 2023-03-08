import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
      state.isAuthenticated = Object.keys(payload).length > 0;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
