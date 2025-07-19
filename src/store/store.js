import { configureStore } from '@reduxjs/toolkit';
import stateReducer from './States/slice'

export const store = configureStore({
    reducer: {
      states:stateReducer,
    },
  });
  
  export default store;