import { Component } from '@angular/core';
import { driver_age } from '../driver-age';
import { time_slots } from '../time';

@Component({
  selector: 'app-cars-search',
  templateUrl: './cars-search.component.html',
  styleUrls: ['./cars-search.component.css'],
})
export class CarsSearchComponent {
  ages:any[]=driver_age;
  slots:any[]=time_slots;
}
