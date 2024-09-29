import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const userApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_BASE_URL}/api`,
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
    tagTypes: ['users'],
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => '/users',
            transformResponse: (response: { data },) => response.data,
            providesTags: ['users']
        }),
        updateAUser: builder.mutation({
            query: (data) => {
                return {
                    url: '/users/me',
                    body: data,
                    method: "PUT",
                }
            },
            invalidatesTags: ['users']
        }),
        getAUser: builder.query({
            query: () => 'users/me',
            // transformResponse: (response) => {
            //     console.log('get response', response)
            // },
        })
    })

})

export const { useGetAllUsersQuery, useUpdateAUserMutation ,useGetAUserQuery} = userApi