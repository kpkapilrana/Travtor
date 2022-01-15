import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { driver_age } from '../driver-age';
import { CarService } from '../shared/services/car.service';
import { time_slots } from '../time';

@Component({
  selector: 'app-cars-search',
  templateUrl: './cars-search.component.html',
  styleUrls: ['./cars-search.component.css'],
})
export class CarsSearchComponent {
  ages:any[]=driver_age;
  slots:any[]=time_slots;
  searchForm:FormGroup;
  error:any={isError:false,errorMessage:''};
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private fb:FormBuilder,
    private carService:CarService
  ){
      this.searchForm = fb.group({
        pick_up_location:['',Validators.required],
        pick_up_date:[],
        drop_off_date:[],
        pick_up_time:[],
        drop_off_time:[],
        driver_age:[]
      })
  }
  onSearch(){
    // this.router.navigateByUrl("/cars");
    if(this.searchForm.valid){
      this.router.navigate(['/cars'],{state:{...this.searchForm.value}});
      this.carService.setSearchQuery(this.searchForm.value);
    }else{
      console.log("Invalid Form");
    }
  }

  get minDate(){
    return this.searchForm.get('pick_up_date')?.value;
  }

  get maxDate(){
    return this.searchForm.get('drop_off_date')?.value;
  }

  get f(){
    return this.searchForm.controls;
  }

//   compareTwoDates(){
//     if(new Date(this.searchForm.controls['pick_up_date'].value)<new Date(this.searchForm.controls['drop_off_date'].value)){
//        this.error={isError:true,errorMessage:'End Date cant before start date'};
//     }
//  }
}
