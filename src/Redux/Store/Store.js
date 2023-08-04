import { configureStore } from '@reduxjs/toolkit';
import jokeReducer from '../Store/Jokeslice'

const store = configureStore({
  reducer: {
    joke: jokeReducer,
  },
});

export default store;
