import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  // username: string;
  email: string;
  role: string;
  token: string;
};

const initialState: InitialState = {
  // username: "",
  email: "",
  role: "",
  token:''
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;
      state.email = user.email;
      state.role = user.role;
      state.token= user.token
    },

    logout: (state, action) => {
      state.email = '';
      state.role = ''
      state.token= ''
    }
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
