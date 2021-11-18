import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const YOUTUBE_API = process.env.REACT_APP_YOUTUBE_API;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://youtube.googleapis.com/youtube/v3`,
    prepareHeaders(headers) {
      headers.set('Accept', 'application/json')
      return headers
    }
  }),
  endpoints(builder) {
    return {
      fetchVideos: builder.query({
        query(search, limit = 10) {
          return `/search?part=snippet&maxResults=${limit}&q=${search}&key=${YOUTUBE_API}`
        }
      })
    }
  }
});

export const { useFetchVideosQuery } = apiSlice