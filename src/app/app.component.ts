import { Component, OnDestroy } from '@angular/core';
import { NavigationStart, Router,Event as NavigationEvent } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { car_list } from './car-itineraries';
import { CarService } from './shared/services/car.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  isHide: boolean =true;
  urls:string[]=['/cars','/sort'];
  subscription:Subscription;
  constructor(private router:Router, private carService:CarService, private translate: TranslateService){
    translate.setDefaultLang('en');
    this.subscription=this.router.events
    .subscribe(
      (event: NavigationEvent) => {
        if(event instanceof NavigationStart) {
          this.isHide = this.urls.includes(event.url) ? false :true;
          if(event.url=== '/sort'){
            const title = event.url.replace('/','')
            carService.setTitle(title);
          }else{
            this.carService.setTitle(environment.title);
          }
        }
      });
      carService.setCars(car_list.CarItineraries);
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/