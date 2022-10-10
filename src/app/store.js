import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import postApi from "./api/posts";
import taskSlice from "./api/postsSlice";



export default configureStore({
    reducer: {
        counter: counterReducer,

        posts: taskSlice,
        [postApi.reducerPath]:postApi.reducer
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware)
  })