import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import userReducer from '../features/user/userSlice';
import {moviesApi} from '../features/movie/movieSlice';


export const store = configureStore({
    reducer: {
      user: userReducer, 
      [moviesApi.reducerPath]: moviesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware)
  });
setupListeners(store.dispatch);
