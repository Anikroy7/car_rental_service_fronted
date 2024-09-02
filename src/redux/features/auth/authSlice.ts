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
      console.log(action.payload, "auth");
      const user = action.payload;
      state.email = user.email;
      state.role = user.role;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
