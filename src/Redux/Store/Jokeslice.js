import { createSlice } from '@reduxjs/toolkit';

const jokeSlice = createSlice({
  name: 'joke',
  initialState: '',
  reducers: {
    setJoke: (state, action) => action.payload,
  },
});

export const { setJoke } = jokeSlice.actions;
export default jokeSlice.reducer;
