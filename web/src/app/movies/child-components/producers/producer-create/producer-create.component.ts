import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';

import { ProducerService } from '../services/producers.service';

@Component({
  selector: 'app-producer-create',
  templateUrl: './producer-create.component.html',
  styleUrls: ['./producer-create.component.sass']
})
export class ProducerCreateComponent implements OnInit {

  ProducersForm: FormGroup;
  createAction: boolean = false;
  updateAction: boolean = false;
  id: string = '';

  constructor(
    private formBuilder: FormBuilder, 
    private producerService: ProducerService, 
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.updateAction = true;
        this.id = params['id'];
        let producer: any;
        this.producerService.getProducerDetails(this.id).subscribe(
          data => { 
            producer = data['data'];
            this.ProducersForm = this.formBuilder.group({
              name: [producer.name, Validators.required],
              sex: [producer.sex, Validators.required],
              dob: [producer.dob ? producer.dob : ''],
              bio: [producer.bio ? producer.bio : '']
            });
          }, 
          error => { alert(error.error.data) }
        );
      } else {
        this.createAction = true;
        this.ProducersForm = this.formBuilder.group({
          name: ['', Validators.required],
          sex: ['', Validators.required],
          dob: [''],
          bio: ['']
        });
      }
    });  
  }

  create() {
    this.producerService.createProducer(this.ProducersForm.value).subscribe(
      data => { 
        alert("created");
        this.router.navigate(['/movies/create']);
      }, 
      error => { alert(error.error.data) }
    );
  }  

  update() {
    this.producerService.updateProducer(this.id, this.ProducersForm.value).subscribe(
      data => { 
        alert("updated");
        this.router.navigate(['/movies']);
      }, 
      error => { alert(error.error.data) }
    );
  }  

}
