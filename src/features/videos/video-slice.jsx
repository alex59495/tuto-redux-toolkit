import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  video: null
}

const video = createSlice({
  name: 'video',
  initialState,
  reducers: {
    // change video
    setVideo(state, action) {
      // It's ok to do this because inner makes it immutable under the hood
      state.video = action.payload
    }
  }
})

export const { setVideo } = video.actions
export default video.reducer