import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carApi = createApi({
  reducerPath: "carApi",
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
  tagTypes: ["cars"],
  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => "/cars",
      transformResponse: (response: { data }) => response.data,
      providesTags: ["cars"],
    }),
    getFpCars: builder.query({
      query: () => "/cars/fp",
    }),
    getSingleCar: builder.query({
      query: (id) => `/cars/${id}`,
      // transformResponse: (response: { data }) => response.data,
      providesTags: (result, error, id) => [{ type: 'cars', id }],
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
      query: ({ updateCarData, id }) => {
        return {
          url: `/cars/${id}`,
          method: "PUT",
          body: updateCarData,

        };
      },
      invalidatesTags: ["cars"],
    }),

    deleteCar: builder.mutation({
      query: (id) => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        return {
          url: `/cars/${id}`,
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo}`,
          },
        }
      },
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