import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../services/movies.service";
import {CategoriesService} from "../services/categories.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any = [];
  categories: any = [];

  constructor(private moviesService: MoviesService, private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
    this.movies = this.moviesService.getMovies();
    this.categories = this.categoriesService.getCategories();
  }
}
