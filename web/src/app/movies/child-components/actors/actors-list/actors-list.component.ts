import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { ActorService } from '../services/actors.service';

import { ActorsList } from '../models/actors.model';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.sass']
})
export class ActorsListComponent implements OnInit {

  @Output() onSelectActors = new EventEmitter<any>();
  @Input() existingActors: any[];

  selectedActors = [];
  actors: ActorsList[];
  dropdownSettings = {
    singleSelection: false,
    idField: '_id',
    textField: 'name',
    itemsShowLimit: 3,
    allowSearchFilter: true,
    enableCheckAll: false,
    defaultOpen: false
  };

  constructor(private actorService: ActorService) { 

  }

  ngOnInit() {
    if (this.existingActors.length > 0) {
      this.selectedActors = this.existingActors;
      this.onSelectActors.emit(this.selectedActors);
    }
    this.actorService.getActors().subscribe(data => {
      this.actors = data['data'];
    });
  }

  onItemSelect() {
    this.onSelectActors.emit(this.selectedActors);
  }
  
  onItemDeSelect() {
    this.onSelectActors.emit(this.selectedActors);
  }

}
