import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Movies } from '../models/movies.model';

import { MovieService } from '../services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.sass']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  movieDetails: Movies;
  id: string;
  sub: any;

  constructor(private route: ActivatedRoute, private moviesService: MovieService, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      let movies: any;
      movies = JSON.parse(localStorage.getItem('movies'));
      let movieDetails = movies.filter(e => e._id === this.id);
      this.movieDetails = movieDetails[0];
    });
  }

  delete() {
    this.moviesService.deleteMovie(this.id).subscribe(
      data => { 
        alert("deleted");
        this.router.navigate(['/movies']);
      }, 
      error => { alert(error.error.data) }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
