import { createSlice} from "@reduxjs/toolkit";
import postApi from "./posts";

const initialState = {
    posts: []
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        deletePosts: (state, action) => {
            state.posts.filter((post) => post.id !== action.payload.id )
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            postApi.endpoints.getAllPosts.matchFulfilled,
            (state, {payload}) => {
                state.posts = payload
            },
                       
        )
    }
})

export const {deletePosts} = postSlice.actions

export default postSlice.reducer;