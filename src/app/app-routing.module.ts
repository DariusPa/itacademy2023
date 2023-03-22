import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {TvShowsComponent} from "./tv-shows/tv-shows.component";
import {MyListComponent} from "./my-list/my-list.component";
import {FilterMovieAccessGuard} from "./guards/filter-movie-access.guard";
import {CategoryComponent} from "./category/category.component";
import {MovieDetailsComponent} from "./movie-details/movie-details.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tv-shows', component: TvShowsComponent },
  { path: 'my-list', component: MyListComponent },
  { path: 'movie/:id', component: MovieDetailsComponent, canActivate: [FilterMovieAccessGuard] },
  { path: 'cat/:id', component: CategoryComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
