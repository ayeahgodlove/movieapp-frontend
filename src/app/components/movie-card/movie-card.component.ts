import { Component, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import Slugify from 'slugify';
import { emptyActor, IActor } from 'src/models/Actor';
import { emptyDirector, IDirector } from 'src/models/Director';
import { emptyGenre, IGenre } from 'src/models/Genre';
import {
  createMovie,
  deleteMovie,
  fetchAllMovies,
} from 'src/redux/movies/movie.action';
import { selectAllMovies } from 'src/redux/movies/movie.selector';
import { emptyMovieData, IMovie, IMovieData, IMovieState } from '../../../models/Movie';
import { FetchApiDataService } from '../../services/fetch-api-data.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Output() movies: IMovieData[] = [emptyMovieData];
  directors: IDirector[] = [emptyDirector];
  actors: IActor[] = [emptyActor];
  genres: IGenre[] = [emptyGenre];

  // movies in store
  public allMovies$: Observable<IMovieState> = this.store.select(
    (state) => state.movies
  );

  constructor(
    private fetchApiData: FetchApiDataService,
    private store: Store<{ movies: IMovieState }>
  ) {}

  ngOnInit(): void {
    this.getDirectors();
    this.getActors();
    this.getGenres();
    this.store.dispatch(fetchAllMovies());
    this.allMovies$.subscribe(movies => this.getMovies(movies.movies));
  }

  createMovie(movie: IMovie) {
    this.store.dispatch(createMovie(movie));
  }

  deleteMovie(id: number) {
    this.store.dispatch(deleteMovie({ id }));
  }

  getMovies(response: IMovie[]): void {
      const movieData: IMovieData[] = response.map((m) => {
        return {
          ...m,
          director: this.getDirectorName(m.directorId),
          genre: this.getGenreName(m.genreId),
          actor: this.getActorName(m.actorId),
          slug: this.slugify(m.title),
        };
      });
      this.movies = movieData;
  }

  /**
   * Get directors
   */
  getDirectors(): void {
    this.fetchApiData.getDirectors().subscribe((resp: IDirector[]) => {
      this.directors = resp;
      return this.directors;
    });
  }

  /**
   * Get Actors
   */
  getActors(): void {
    this.fetchApiData.getActors().subscribe((resp: IActor[]) => {
      this.actors = resp;
      return this.actors;
    });
  }

  /**
   * Get Genres
   */
  getGenres(): void {
    this.fetchApiData.getGenres().subscribe((resp: IGenre[]) => {
      this.genres = resp;
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
