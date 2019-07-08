import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppRoutingModule } from './app-routing.module';

import { FilterPipe } from "./shared/pipes/filter.pipe";

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MovieCreateComponent } from './movies/movie-create/movie-create.component';
import { ActorDetailsComponent } from './movies/child-components/actors/actor-details/actor-details.component';
import { ProducerDetailsComponent } from './movies/child-components/producers/producer-details/producer-details.component';
import { ActorsListComponent } from './movies/child-components/actors/actors-list/actors-list.component';
import { ProducersListComponent } from './movies/child-components/producers/producers-list/producers-list.component';
import { ActorCreateComponent } from './movies/child-components/actors/actor-create/actor-create.component';
import { ProducerCreateComponent } from './movies/child-components/producers/producer-create/producer-create.component';

@NgModule({
  declarations: [
    FilterPipe,
    AppComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    MovieCreateComponent,
    ActorDetailsComponent,
    ProducerDetailsComponent,
    ActorsListComponent,
    ProducersListComponent,
    ActorCreateComponent,
    ProducerCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
