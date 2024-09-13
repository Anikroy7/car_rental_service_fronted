import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_SERVER_BASE_URL}/api` }),
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => '/users'
        }),
    })

})  

export const {useGetAllUsersQuery}= userApi