import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, from, map, of, switchMap, withLatestFrom } from 'rxjs';
import { FetchApiDataService } from 'src/app/services/fetch-api-data.service';
import {
    createMovie,
  deleteMovie,
  fetchAllMovies,
  fetchAllMoviesFailure,
  fetchAllMoviesSuccess,
} from './movie.action';
import { selectAllMovies } from './movie.selector';

@Injectable()
export class MovieEffects {
  constructor(
    private action$: Actions,
    private store: Store,
    private movieService: FetchApiDataService
  ) {}

  // Run this code when a fetchAllMovies actions is dispatched
  fetchAllMovies$ = createEffect(() => {
    return this.action$.pipe(
      ofType(fetchAllMovies),
      switchMap(() =>
        from(this.movieService.getAllMovies()).pipe(
          map((movies) => fetchAllMoviesSuccess({ movies })),
          catchError((error) => of(fetchAllMoviesFailure({ error })))
        )
      )
    );
  });

//   createMovies$ = createEffect(() => {
//     return (
//       this.action$.pipe(
//         ofType(createMovie, deleteMovie),
//         withLatestFrom(this.store.select(selectAllMovies)),
//         switchMap(([action, todos]) => from(this.movieService.crea(todos)))
//       ),
//       // Most effects dispatch another action, but this one is just a "fire and forget" effect
//       { dispatch: false }
//     );
//   });
}
