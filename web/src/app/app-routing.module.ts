import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MovieCreateComponent } from './movies/movie-create/movie-create.component';
import { ActorDetailsComponent } from './movies/child-components/actors/actor-details/actor-details.component';
import { ProducerDetailsComponent } from './movies/child-components/producers/producer-details/producer-details.component';
import { ActorCreateComponent } from './movies/child-components/actors/actor-create/actor-create.component';
import { ProducerCreateComponent } from './movies/child-components/producers/producer-create/producer-create.component';

const routes: Routes = [
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {path: 'movies', component: MoviesListComponent},
  {path: 'movies/create', component: MovieCreateComponent},
  {path: 'movies/:id', component: MovieDetailsComponent},
  {path: 'movies/update/:id', component: MovieCreateComponent},
  {path: 'actors/create', component: ActorCreateComponent},
  {path: 'actors/:id', component: ActorDetailsComponent},
  {path: 'actors/update/:id', component: ActorCreateComponent},
  {path: 'producers/create', component: ProducerCreateComponent},
  {path: 'producers/:id', component: ProducerDetailsComponent},
  {path: 'producers/update/:id', component: ProducerCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
