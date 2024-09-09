import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://assignment-three-two.vercel.app/api",
    baseUrl: "http://localhost:5000/api",
  }),
  
  endpoints: (builder) => ({
    
    createUser: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/signup",
          method: "POST",
          body: data,
        };
      },
      //   invalidatesTags: ["auth"],
    }),
    loginUser: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/signin",
          method: "POST",
          body: data,
        };
      },
      //   invalidatesTags: ["auth"],
    }),

    forgetPassword: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/forget-password",
          method: "POST",
          body: data,
        };
      },
      //   invalidatesTags: ["auth"],
    }),
    resetPassword: builder.mutation({
      query: (data) => {
        console.log('resrt data', data)
        return {
          url: "/auth/reset-password",
          method: "POST",
          body: data.bodyData,
          headers: {
             Authorization: `Bearer ${data.token}`
          }
        };
      },
      //   invalidatesTags: ["auth"],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation
} = authApi;
