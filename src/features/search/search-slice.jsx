import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: ""
}

const search = createSlice({
  name: 'search',
  initialState,
  reducers: {
    // change search
    setSearch(state, action) {
      // It's ok to do this because inner makes it immutable under the hood
      state.value = action.payload
    }
  }
})

export const { setSearch } = search.actions
export default search.reducer