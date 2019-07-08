import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { ProducerService } from '../services/producers.service';

import { ProducerList } from '../models/producers.model';

@Component({
  selector: 'app-producers-list',
  templateUrl: './producers-list.component.html',
  styleUrls: ['./producers-list.component.sass']
})
export class ProducersListComponent implements OnInit {

  @Output() onSelectProducer = new EventEmitter<any>();
  @Input() existingProducer: any;

  selectedProducer: any;
  producers: ProducerList[];
  dropdownSettings = {
    singleSelection: true,
    idField: '_id',
    textField: 'name',
    itemsShowLimit: 3,
    allowSearchFilter: true,
    enableCheckAll: false,
    defaultOpen: false
  };

  constructor(private producerService: ProducerService) { }

  ngOnInit() {
    if (this.existingProducer) {
      this.selectedProducer = [this.existingProducer];
      this.onSelectProducer.emit(this.selectedProducer);
    }
    this.producerService.getProducers().subscribe(data => {
      this.producers = data['data'];
    });
  }

  onItemSelect() {
    this.onSelectProducer.emit(this.selectedProducer);
  }
  
  onItemDeSelect() {
    this.onSelectProducer.emit(this.selectedProducer);
  }

}
