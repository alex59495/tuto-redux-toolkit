import { configureStore } from "@reduxjs/toolkit";
import videoReducer from '../features/videos/video-slice';
import videosReducer from '../features/videos/videos-slice';
import searchReducer from '../features/search/search-slice';
import {apiSlice} from '../features/videos/videos-api-slice';

export const store = configureStore({
  reducer: {
    // videos: videosReducer,
    selectedVideo: videoReducer,
    search: searchReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  }
});
