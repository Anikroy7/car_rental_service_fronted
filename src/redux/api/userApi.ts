import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const userApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_BASE_URL}/api`,
        prepareHeaders: (headers) => {
            const userInfo = JSON.parse(localStorage.getItem('userInfo'))
            // console.log('user token',token)
            headers.set('Authorization', `Bearer ${userInfo.token}`);
            headers.set('Content-Type', 'application/json');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => '/users',
            transformResponse: (response: { data },) => response.data,
        }),
    })

})

export const { useGetAllUsersQuery } = userApi