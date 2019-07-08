import { Component, OnInit } from '@angular/core';

import { MovieService } from '../services/movies.service';

import { Movies } from '../models/movies.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.sass']
})
export class MoviesListComponent implements OnInit {

  movies: Movies[];
  constructor(private movieService: MovieService) { 
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data['data'];
      localStorage.setItem('movies', JSON.stringify(data['data']));
    });
  }

}
