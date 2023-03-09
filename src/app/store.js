import { configureStore } from "@reduxjs/toolkit";
// import filterReducer from "../features/filter/filterSlice";
// import relatedVideosReducer from "../features/relatedVideos/relatedVideosSlice";
// import tagsReducer from "../features/tags/tagsSlice";
// import videoReducer from "../features/video/videoSlice";
import blogsReducer from "../features/blogs/blogsSlice";
import blogReducer from "../features/blog/blogSlice"

export const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        blog:blogReducer,
        // tags: tagsReducer,
        // video: videoReducer,
        // relatedVideos: relatedVideosReducer,
        // filter: filterReducer,
    },
});
