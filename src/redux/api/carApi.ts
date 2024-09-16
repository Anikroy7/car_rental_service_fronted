import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_SERVER_BASE_URL}/api`,
  // crendentials: "include" will face CORS if credential is not provided
  credentials: "same-origin",
  prepareHeaders: (headers) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    if (userInfo?.token) {
      headers.set("authorization", `Bearer ${userInfo?.token}`);
      headers.set("Content-Type", "application/json");
    }
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  return await baseQuery(args, api, extraOptions);
};




export const carApi = createApi({
  reducerPath: "carApi",
  baseQuery,
  // baseQuery: fetchBaseQuery({
  //   baseUrl: `${import.meta.env.VITE_SERVER_BASE_URL}/api`,
  //   credentials: "same-origin",
  //   prepareHeaders: (headers) => {
  //     const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  //     if (userInfo?.token) {
  //       // console.log('user token',token)
  //       headers.set('Authorization', `Bearer ${userInfo.token}`);
  //       headers.set('Content-Type', 'application/json');
  //     }
  //     return headers;
  //   },

  // }),
  tagTypes: ["cars"],
  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => "/cars",
      // transformResponse: (response: { data },) => response.data,

      providesTags: ["cars"],
    }),
    getFpCars: builder.query({
      query: () => "/cars/fp",
    }),
    getSingleCar: builder.query({
      query: (id) => `/cars/${id}`,
    }),
    createCar: builder.mutation({
      query: (data) => {
        console.log(data)
        return {
          url: "/cars",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["cars"],
    }),
    updateCar: builder.mutation({
      query: ({ formData, id }) => {
        return {
          url: `/cars/${id}`,
          method: "PUT",
          body: formData,
        };
      },
      invalidatesTags: ["cars"],
    }),

    deleteCar: builder.mutation({
      query: (id) => ({
        url: `/cars/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cars"],
    }),
  }),
});

export const {
  useGetCarsQuery,
  useCreateCarMutation,
  useDeleteCarMutation,
  useGetSingleCarQuery,
  useUpdateCarMutation,
  useGetFpCarsQuery
} = carApi;