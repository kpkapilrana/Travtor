import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { driver_age } from '../driver-age';
import { CarService } from '../shared/services/car.service';
import { time_slots } from '../time';

import {TranslateService} from '@ngx-translate/core';
import { CustomValidators } from '../shared/validators/custom-validators';

@Component({
  selector: 'app-cars-search',
  templateUrl: './cars-search.component.html',
  styleUrls: ['./cars-search.component.css'],
})
export class CarsSearchComponent {
  ages:any[]=driver_age;
  slots:any[]=time_slots;
  searchForm:FormGroup;
  currentDate=new Date();
  constructor(
    private router:Router,
    private fb:FormBuilder,
    private carService:CarService,
    private translate: TranslateService
  ){
      this.searchForm = this.fb.group({
        pick_up_location:['',Validators.required],
        pick_up_date:[null,[CustomValidators.dateValidator]],
        drop_off_date:[null,[CustomValidators.dateValidator]],
        pick_up_time:[],
        drop_off_time:[],
        driver_age:[null,[CustomValidators.ageValidator]]
      },{
        validator:CustomValidators.validateDropOffTime('pick_up_date','drop_off_date','pick_up_time','drop_off_time')
      });
      // console.log("VVVV",this.searchForm.get('drop_off_date')?.value);
  }

  
  onSearch(){
    // this.router.navigateByUrl("/cars");
    if(this.searchForm.valid){
      this.router.navigate(['/cars'],{state:{...this.searchForm.value}});
      this.carService.setSearchQuery(this.searchForm.value);
      this.searchForm.reset();
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

  get isPickDate(){
    return this.searchForm.get('pick_up_date')?.value ? false : true;
  }

  get isDropDate(){
    return this.searchForm.get('drop_off_date')?.value ? false : true;
  }
}
