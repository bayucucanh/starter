import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from './Reducers';

const store = configureStore({
  reducer: {
    loading: loadingReducer,
  }
})

export default store;