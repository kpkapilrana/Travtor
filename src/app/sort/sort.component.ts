import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Sort } from '../shared/models/sort.model';
import { CarService } from '../shared/services/car.service';
import { SORT_OPTION } from './sort.config';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  sorts:Sort[]=SORT_OPTION;
  constructor(
    private carService:CarService
  ) {
   }

  ngOnInit(): void {
  }

  onChange(e:MatRadioChange){
    const {value} =e;
    let payload ={...value};
    delete(payload['name']);
    console.log("Event",payload);
    this.carService.setSortQuery(payload);
  }

}
