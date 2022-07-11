import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.themoviedb.org/3/` }),
  endpoints: (builder) => ({
    getAllMovies: builder.query({
      query: (name) => `${name}?api_key=07333ec134e9101f41653faae20625ed`,
    }),
  }),
});
export const { useGetAllMoviesQuery } = moviesApi
// https://api.themoviedb.org/3/movie/550?api_key=07333ec134e9101f41653faae20625ed