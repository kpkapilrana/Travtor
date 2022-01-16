import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Car } from '../shared/models/car.model';
import { CarService } from '../shared/services/car.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  // cars:any[];
  cars$:Observable<Car[]>;
  searchQuery:any;
  constructor(
    private router:Router,
    private carService:CarService,
    private translate: TranslateService
  ) {
    // this.cars = car_list.CarItineraries;
      if(this.router.getCurrentNavigation()?.extras.state){
        this.searchQuery = this.router.getCurrentNavigation()?.extras.state;
        console.log("Query",this.searchQuery);
      }
      this.cars$=this.carService.getCars();
   }

  ngOnInit(): void {
  }

  onSort(e:MatButtonToggleChange){
    console.log("Toggle Event",e);
    if(e.value === 'sort'){
      this.router.navigate(['/sort']);
    }else{
      console.log("Clicked on Filter button");
    }
  }

}
