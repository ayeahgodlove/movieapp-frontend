import { createAction, props } from '@ngrx/store';
import { IMovie, IMovieState } from 'src/models/Movie';

export const fetchAllMovies = createAction<string>(
  '[Movie Component] Fetch All Movies'
);
export const fetchAllMoviesSuccess = createAction<string, { movies: IMovie[] }>(
  '[Movie Component] Fetch All Movies Success',
  props<{ movies: IMovie[] }>()
);
export const fetchAllMoviesFailure = createAction<string, { error: string }>(
  '[Movie Component] Fetch All Movies Failure',
  props<{ error: string }>()
);
export const searchMovie = createAction<string, IMovieState>(
  '[Movie Component] Search Movie',
  props<IMovieState>()
);
export const createMovie = createAction<string, IMovie>(
  '[Movie Component] Create Movie',
  props<IMovie>()
);
export const setMovie = createAction<string, IMovie>(
  '[Movie Component] Set Movie',
  props<IMovie>()
);
export const updateMovie = createAction<string, IMovie>(
  '[Movie Component] Update Movie',
  props<IMovie>()
);
export const deleteMovie = createAction<string, { id: number }>(
  '[Movie Component] Delete Movie',
  props<{ id: number }>()
);
