import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carApi = createApi({
  reducerPath: "carApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_SERVER_BASE_URL}/api` }),
  tagTypes: ["cars"],
  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => "/cars",
      transformResponse: (response: { data },) => response.data,
      
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