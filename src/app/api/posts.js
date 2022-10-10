import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({baseUrl: ' http://localhost:5000'}),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => 'posts',
            providesTags: result => ['Post']
        }) ,  

        deletePost: builder.mutation({
            query: (post) =>({
                url: `/posts/${post.id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Post']
        }),

        changePost: builder.mutation({
            query: (post) =>({
                url: `/posts/${post.id}`,
                method: 'PATCH',
                body: {"completed": !post.completed}
            }),
            invalidatesTags: ['Post']
        })
    })
})

export const {useGetAllPostsQuery} = postApi;

export default postApi;