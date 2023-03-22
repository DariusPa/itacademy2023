import { Injectable } from '@angular/core';
import { serviceData } from "../shared/data";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  getMovies() {
    return serviceData.movies;
  }

  getMovie(id: string) {
    return serviceData.movies.find((movie) => movie.id.toString() == id);
  }

  getMoviesByCategory(id: string) {
    return serviceData.movies.filter((movie) => movie.categoryId.toString() == id);
  }
}
