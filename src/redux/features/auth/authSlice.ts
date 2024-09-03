import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  // username: string;
  email: string;
  role: string;
};

const initialState: InitialState = {
  // username: "",
  email: "",
  role: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;
      state.email = user.email;
      state.role = user.role;
    },

    logout: (state, action) => {
      state.email = '';
      state.role = ''
    }
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
