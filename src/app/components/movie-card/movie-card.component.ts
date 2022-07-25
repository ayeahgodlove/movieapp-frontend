import { Component, OnInit, Output } from '@angular/core';
import { emptyActor, IActor } from 'src/models/Actor';
import { emptyDirector, IDirector } from 'src/models/Director';
import { emptyGenre, IGenre } from 'src/models/Genre';
import { emptyMovie, emptyMovieData, IMovie, IMovieData } from '../../../models/Movie';
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
  genres: IGenre[] = [emptyGenre]
  constructor(private fetchApiData: FetchApiDataService) {}

  ngOnInit(): void {
    this.getMovies();
    this.getDirectors();
    this.getActors();
    this.getGenres();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: IMovie[]) => {
      const movieData: IMovieData[] = resp.map(m => {
        return {
          ...m,
          director: this.getDirectorName(m.directorId),
          genre: this.getGenreName(m.genreId),
          actor: this.getActorName(m.actorId)
        }
      })
      this.movies = movieData;
      console.log(this.movies);
      return this.movies;
    });
  }

  getDirectors(): void {
    this.fetchApiData.getDirectors().subscribe((resp: IDirector[]) => {
      this.directors = resp;
      return this.directors;
    })
  }

  getActors(): void {
    this.fetchApiData.getActors().subscribe((resp: IActor[]) => {
      this.actors = resp;
      return this.actors;
    })
  }

  getGenres(): void {
    this.fetchApiData.getGenres().subscribe((resp: IGenre[]) => {
      this.genres = resp;
      return this.genres;
    })
  }

  getDirectorName(directorId: number): string {
    return this.directors.find(d => d.id === directorId)?.name || ''
  }
  getActorName(actorId: number): string {
    return this.actors.find(a => a.id === actorId)?.name || ''
  }
  getGenreName(genreId: number): string {
    return this.genres.find(d => d.id === genreId)?.description || ''
  }
}
