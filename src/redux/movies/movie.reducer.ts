import { createReducer, on } from '@ngrx/store';
import { emptyMovie, IMovieState } from 'src/models/Movie';
import { UpdateMode } from 'src/models/UpdateMode';
import {
  fetchAllMovies,
  fetchAllMoviesFailure,
  fetchAllMoviesSuccess,
  searchMovie,
  createMovie,
  updateMovie,
  deleteMovie,
  setMovie,
} from './movie.action';

export const initialState: IMovieState = {
  movies: [],
  movie: emptyMovie,
  status: 'PENDING',
  isLoading: false,
  errors: '',
};

export const movieReducer = createReducer(
  initialState,
  on(fetchAllMovies, (state) => {
    return { ...state, status: 'LOADING', isLoading: true };
  }),
  on(fetchAllMoviesSuccess, (state, { movies }) => {
    return { ...state, movies: movies, errors: '', status: 'SUCCESS', isLoading: false };
  }),
  on(fetchAllMoviesFailure, (state, { error }) => {
    return { ...state, errors: error, status: 'ERROR', isLoading: false };
  }),
  on(searchMovie, (state, payload) => {
    return {
      ...state,
      movies: payload.movies,
    };
  }),
  on(createMovie, (state, payload) => {
    return {
      ...state,
      movies: [...state.movies, payload],
    };
  }),
  on(updateMovie, (state, payload) => {
    return {
      ...state,
      movies: [...state.movies, payload],
    };
  }),
  on(setMovie, (state, payload) => {
    return {
      ...state,
      movie: payload,
    };
  }),
  on(deleteMovie, (state, payload) => {
    return {
      ...state,
      movies: state.movies.filter((movie) => movie.id !== payload.id),
    };
  })
);
