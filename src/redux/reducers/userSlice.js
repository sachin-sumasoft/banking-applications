import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;
