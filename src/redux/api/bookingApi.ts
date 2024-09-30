import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookingApi = createApi({
    reducerPath: "bookingApi",
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
    tagTypes: ["bookings"],
    endpoints: (builder) => ({

        createBooking: builder.mutation({
            query: (data) => {
                return {
                    url: "/bookings",
                    method: "POST",
                    body: data,

                };
            },
            invalidatesTags: ["bookings"],
        }),
        updateBooking: builder.mutation({
            query: ({ updateBookingData, id }) => {
                return {
                    url: `/bookings/${id}`,
                    method: "PUT",
                    body: updateBookingData,

                };
            },
            invalidatesTags: ["bookings"],
        }),

        getMyBookings: builder.query({
            query: () => 'bookings/my-bookings',
            transformResponse: (response: { data },) => response.data,
            providesTags: ['bookings']
        }),
        getAllBookings: builder.query({
            query: () => 'bookings',
            transformResponse: (response: { data },) => response.data,
            providesTags: ['bookings']
        }),
    

    }),
});

export const {
    useUpdateBookingMutation,
    useCreateBookingMutation,
    useGetMyBookingsQuery,
    useGetAllBookingsQuery
} = bookingApi;