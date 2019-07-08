import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProducerService } from '../services/producers.service';

import { ProducerDetails } from '../models/producers.model';

@Component({
  selector: 'app-producer-details',
  templateUrl: './producer-details.component.html',
  styleUrls: ['./producer-details.component.sass']
})
export class ProducerDetailsComponent implements OnInit, OnDestroy {

  producerDetails: ProducerDetails;
  id: string;
  sub: any;

  constructor(private producerService: ProducerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.producerService.getProducerDetails(this.id).subscribe(
        data => {this.producerDetails = data['data']},
        error => { alert(error.error.data) }
      );
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
