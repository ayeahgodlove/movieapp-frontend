import { Component, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  emptyMovieData,
  IMovie,
  IMovieData,
  IMovieState,
} from 'src/models/Movie';
import Slugify from 'slugify';
import { emptyDirector, IDirector } from 'src/models/Director';
import { emptyActor, IActor } from 'src/models/Actor';
import { emptyGenre, IGenre } from 'src/models/Genre';
import { FetchApiDataService } from 'src/app/services/fetch-api-data.service';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  directors: IDirector[] = [emptyDirector];
  actors: IActor[] = [emptyActor];
  genres: IGenre[] = [emptyGenre];
  @Output() movieData = emptyMovieData;

  constructor(
    private fetchApiData: FetchApiDataService,
    private store: Store<{ movies: IMovieState }>
  ) {}

  // movies in store
  public allMovies$: Observable<IMovieState> = this.store.select(
    (state) => state.movies
  );
  ngOnInit(): void {
    this.getActors();
    this.getDirectors();
    this.getGenres();
    this.allMovies$.subscribe((movies) => {
      const director = this.getDirectorName(movies.movie.directorId);
      const actor = this.getActorName(movies.movie.actorId);
      const genre = this.getGenreName(movies.movie.genreId);
      const slug = this.slugify(movies.movie.title);
      this.movieData = {
        ...movies.movie,
        director,
        genre,
        actor,
        slug,
      };
      return this.movieData;
    });
  }

  /**
   * Get directors
   */
  getDirectors(): void {
    this.fetchApiData.getDirectors().subscribe((resp: IDirector[]) => {
      this.directors = [...resp];
      return this.directors;
    });
  }

  /**
   * Get Actors
   */
  getActors(): void {
    this.fetchApiData.getActors().subscribe((resp: IActor[]) => {
      this.actors = [...resp];
      return this.actors;
    });
  }

  /**
   * Get Genres
   */
  getGenres(): void {
    this.fetchApiData.getGenres().subscribe((resp: IGenre[]) => {
      this.genres = [...resp];
      return this.genres;
    });
  }

  getDirectorName(directorId: number): string {
    return this.directors.find((d) => d.id === directorId)?.name || '';
  }
  getActorName(actorId: number): string {
    return this.actors.find((a) => a.id === actorId)?.name || '';
  }
  getGenreName(genreId: number): string {
    return this.genres.find((d) => d.id === genreId)?.description || '';
  }
  slugify(str: string): string {
    return Slugify(str.toLowerCase(), '_');
  }
}
