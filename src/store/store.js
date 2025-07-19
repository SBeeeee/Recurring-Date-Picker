import { configureStore } from '@reduxjs/toolkit';
import stateReducer from './States/slice'
import statsReducer from './Stats/slice'

export const store = configureStore({
    reducer: {
      states:stateReducer,
      stats:statsReducer,
    },
  });
  
  export default store;