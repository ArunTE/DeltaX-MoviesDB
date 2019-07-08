import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';

import { MovieService } from '../services/movies.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.sass']
})
export class MovieCreateComponent implements OnInit {

  MoviesForm: FormGroup;
  createAction: boolean = false;
  updateAction: boolean = false;
  actors: any[] = [];
  producer: string = '';
  id: string = '';

  constructor(
    private formBuilder: FormBuilder, 
    private moviesService: MovieService, 
    private router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) { }

  selectedActors(value: any) {
    this.actors = value.map(e => {
      return e._id;
    });
  }

  selectedProducer(value: any) {
    this.producer = value.length > 0 ? value[0]._id : '';
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.updateAction = true;
        this.id = params['id'];
        let movies: any;
        movies = JSON.parse(localStorage.getItem('movies'));
        const movieDetails = movies.filter(e => e._id === this.id);
        if (movieDetails.length > 0) {
          this.actors = movieDetails[0].actors;
          this.producer = movieDetails[0].producer;
          this.MoviesForm = this.formBuilder.group({
            name: [movieDetails[0].name, Validators.required],
            year_of_release: [movieDetails[0].year_of_release, Validators.required],
            plot: [movieDetails[0].plot ? movieDetails[0].plot : ''],
            poster: [movieDetails[0].poster, Validators.required],
            actors: ['', [Validators.required, Validators.minLength(1)]],
            producer: ['', Validators.required],
          });
        } else {
          alert("movie does not exit")
        }
      } else {
        this.createAction = true;
        this.MoviesForm = this.formBuilder.group({
          name: ['', Validators.required],
          year_of_release: ['', Validators.required],
          plot: [''],
          poster: ['', Validators.required],
          actors: ['', [Validators.required, Validators.minLength(1)]],
          producer: ['', Validators.required],
        });
      }
    });
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  create() {
    this.MoviesForm.controls['actors'].setValue(this.actors);
    this.MoviesForm.controls['producer'].setValue(this.producer);
    this.moviesService.createMovie(this.MoviesForm.value).subscribe(
      data => { 
        alert("created");
        this.router.navigate(['/']);
      }, 
      error => { alert(error.error.data) }
    );

  }

  update() {
    this.MoviesForm.controls['actors'].setValue(this.actors);
    this.MoviesForm.controls['producer'].setValue(this.producer);
    this.moviesService.updateMovie(this.id, this.MoviesForm.value).subscribe(
      data => { 
        alert("updated");
        this.router.navigate(['/movies']);
      }, 
      error => { alert(error.error.data) }
    );

  }

}
