import { Component, OnInit, Output } from '@angular/core';
import { emptyMovie, IMovie } from '../../../models/Movie';
import { FetchApiDataService } from '../../services/fetch-api-data.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

@Output() movies: IMovie[] = [emptyMovie]
  constructor(private fetchApiData: FetchApiDataService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
        this.movies = resp;
        console.log(this.movies);
        return this.movies;
      });
    }
}