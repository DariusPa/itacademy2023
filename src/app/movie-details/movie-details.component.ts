import { Component } from '@angular/core';
import {CategoriesService} from "../services/categories.service";
import {MoviesService} from "../services/movies.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  movie: any = {};

  constructor(private moviesService: MoviesService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const movieId = this.activatedRoute.snapshot.paramMap.get('id');
    this.movie = this.moviesService.getMovie(movieId || '');
  }
}
