import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { car_list } from 'src/app/car-itineraries';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car.model';
import { Query, Search, Sort } from '../models/query.model';
import * as _ from 'lodash';


const intialQuery = {
  search:{
    pick_up_location:'',
  pick_up_date:null,
  drop_off_date:null,
  pick_up_time:'',
  drop_off_time:'',
  driver_age:0
  },
  sort:{
    id:'',
    sort_type:''
  }
}

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private searchQuery = new BehaviorSubject<Query>(intialQuery);
  private cars = new BehaviorSubject<Car[]>([]);
  private title = new BehaviorSubject<string>(environment.title);
  constructor() { }

  setTitle(value:string){
    this.title.next(value);
  }

  getTitle(){
    return this.title.asObservable();
  }

  setSearchQuery(value:Search){
    console.log("Search Data", this.searchQuery.value);
    const payload = {...this.searchQuery.value, search:value}
    this.searchQuery.next(payload);
  }

  getSearchQuery(){
    return this.searchQuery.asObservable();
  }

  setSortQuery(value:Sort){
    const payload = {...this.searchQuery.value, sort:value}
    console.log("Sort Payload",payload);
    this.searchQuery.next(payload);
    this.sortData(value)
  }

  sortData(value:Sort){
    const {id,sort_type}=value;
    let updatedCar:Car[];
    switch(id){
      case 'price':
        if(sort_type === 'asc'){
          updatedCar = _.orderBy(car_list.CarItineraries,['fare.perDay'],['asc']);
      }else{
        updatedCar = _.orderBy(car_list.CarItineraries,['fare.perDay'],['desc']);
      }
      
        this.setCars(updatedCar);
        break;
      case 'rental_company':
        if(sort_type === 'asc'){
        updatedCar = _.orderBy(car_list.CarItineraries,['vehicle.name'],['asc']);
        }else{
          updatedCar = _.orderBy(car_list.CarItineraries,['vehicle.name'],['desc']);
        }
        this.setCars(updatedCar);
        break;
      case 'car_type':
          if(sort_type === 'asc'){
              updatedCar = _.orderBy(car_list.CarItineraries,['vehicle.type'],['asc']);
          }else{
            updatedCar = _.orderBy(car_list.CarItineraries,['vehicle.type'],['desc']);
          }
        this.setCars(updatedCar);
        break;
    }
  }

  getCars(){
    return this.cars.asObservable();
  }

  setCars(cars:Car[]){
    this.cars.next(cars);
  }
}
