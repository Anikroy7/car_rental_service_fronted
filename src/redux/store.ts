import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import bookingReducer from "./features/booking/bookingSlice";
import { authApi } from "./api/authApi";
import { carApi } from "./api/carApi";
import { userApi } from "./api/userApi";
import { bookingApi } from "./api/bookingApi";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [carApi.reducerPath]: carApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [bookingApi.reducerPath]: bookingApi.reducer,
    auth: authReducer,
    booking: bookingReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, carApi.middleware, userApi.middleware, bookingApi.middleware),
});

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];

export default store;
