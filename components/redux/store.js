import { configureStore } from '@reduxjs/toolkit';
import bikesReducer from './features/bikesSlice';

const store = configureStore({
  reducer: {
    bikes: bikesReducer,
  },
});

export default store;