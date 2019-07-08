import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';

import { ActorService } from '../services/actors.service';

@Component({
  selector: 'app-actor-create',
  templateUrl: './actor-create.component.html',
  styleUrls: ['./actor-create.component.sass']
})
export class ActorCreateComponent implements OnInit {

  ActorsForm: FormGroup;
  createAction: boolean = false;
  updateAction: boolean = false;
  id: string = '';

  constructor(
    private formBuilder: FormBuilder, 
    private actorService: ActorService, 
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.updateAction = true;
        this.id = params['id'];
        let actors: any;
        this.actorService.getActorDetails(this.id).subscribe(
          data => { 
            actors = data['data'];
            this.ActorsForm = this.formBuilder.group({
              name: [actors.name, Validators.required],
              sex: [actors.sex, Validators.required],
              dob: [actors.dob ? actors.dob : ''],
              bio: [actors.bio ? actors.bio : '']
            });
          }, 
          error => { alert(error.error.data) }
        );
      } else {
        this.createAction = true;
        this.ActorsForm = this.formBuilder.group({
          name: ['', Validators.required],
          sex: ['', Validators.required],
          dob: [''],
          bio: ['']
        });
      }
    });  
  }

  create() {
    this.actorService.createActor(this.ActorsForm.value).subscribe(
      data => { 
        alert("created");
        this.router.navigate(['/movies/create']);
      }, 
      error => { alert(error.error.data) }
    );
  }

  update() {
    this.actorService.updateActor(this.id, this.ActorsForm.value).subscribe(
      data => { 
        alert("updated");
        this.router.navigate(['/movies']);
      }, 
      error => { alert(error.error.data) }
    );
  }

}
