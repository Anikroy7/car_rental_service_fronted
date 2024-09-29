import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_BASE_URL}/api`,
    credentials: "same-origin",
    prepareHeaders: (headers) => {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      if (userInfo?.token) {
        // console.log('user token',token)
        headers.set('Authorization', `Bearer ${userInfo.token}`);
        headers.set('Content-Type', 'application/json');
      }
      return headers;
    },
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
        return {
          url: "/auth/reset-password",
          method: "POST",
          body: data.bodyData,
          // headers: {
          //   Authorization: `Bearer ${data.token}`
          // }
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
