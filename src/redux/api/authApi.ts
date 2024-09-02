import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://assignment-three-two.vercel.app/api",
  }),
  //   tagTypes: ["auth"],
  endpoints: (builder) => ({
    // getProducts: builder.query({
    //   query: () => "/products",
    //   providesTags: ["products"],
    // }),

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
  }),
});

export const { useCreateUserMutation } = authApi;
