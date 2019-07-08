import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ActorService } from '../services/actors.service';

import { ActorDetails } from '../models/actors.model';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.sass']
})
export class ActorDetailsComponent implements OnInit, OnDestroy {

  actorDetails: ActorDetails;
  id: string;
  sub: any;

  constructor(private actorService: ActorService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.actorService.getActorDetails(this.id).subscribe(
        data => { this.actorDetails = data['data']}, 
        error => { alert(error.error.data) }
      );
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
