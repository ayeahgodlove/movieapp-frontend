import { Component, OnInit, Output } from '@angular/core';
import { FetchApiDataService } from '../../services/fetch-api-data.service';
import { emptyMovie, IMovie } from '../../../models/Movie';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Output() slides: IMovie[] = [emptyMovie];
  constructor(private fetchApiData: FetchApiDataService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
        this.slides = resp;
        console.log(this.slides);
        return this.slides;
      });
    }

  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
