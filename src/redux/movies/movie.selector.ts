import { createSelector } from "@ngrx/store";
import { IMovieState } from "src/models/Movie";
import { AppState } from "../app.state";

export const selectMovies = (state: AppState) => state.movies
export const selectAllMovies = createSelector(selectMovies, (state: IMovieState) => state.movies)