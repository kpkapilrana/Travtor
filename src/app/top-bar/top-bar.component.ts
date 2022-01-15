import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Query } from '../shared/models/query.model';
import { CarService } from '../shared/services/car.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  title$;
  searchQuery$;
  constructor(private carService:CarService, private router:Router){
    this.title$=this.carService.getTitle();
      this.searchQuery$=this.carService.getSearchQuery();
  }

  goPrevious(){
    this.router.navigate(['/cars']);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/