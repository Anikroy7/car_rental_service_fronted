import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const userApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_BASE_URL}/api`,
    }),
    tagTypes: ['users'],
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => {
                const userInfo = JSON.parse(localStorage.getItem('userInfo'))
                return {
                    url: '/users',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                }
            },
            transformResponse: (response: { data },) => response.data,
            providesTags: ['users']
        }),
        updateAUser: builder.mutation({
            query: (data) => {
                const userInfo = JSON.parse(localStorage.getItem('userInfo'))
                return {
                    url: '/users/me',
                    body: data,
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                }
            },
            invalidatesTags: ['users']
        })
    })

})

export const { useGetAllUsersQuery, useUpdateAUserMutation } = userApi