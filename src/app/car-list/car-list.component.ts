import { Component, OnInit } from '@angular/core';
import { car_list } from '../car-itineraries';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars:any[];
  constructor() {
    this.cars = car_list.CarItineraries;
   }

  ngOnInit(): void {
  }

}
