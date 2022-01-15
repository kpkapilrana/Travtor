import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CarsSearchComponent } from './cars-search/cars-search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FlightComponent } from './flight/flight.component';
import { HotelComponent } from './hotel/hotel.component';
import { CruiseComponent } from './cruise/cruise.component';
import { CarListComponent } from './car-list/car-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SortComponent } from './sort/sort.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo:"search", pathMatch: 'full'},
      { path: 'search', component: CarsSearchComponent},
    { path: 'flight', component: FlightComponent },
    { path: 'hotel', component: HotelComponent },
    { path: 'cruise', component: CruiseComponent },
    { path: 'cars', component: CarListComponent },
    { path: 'sort', component: SortComponent },
    ]),
    BrowserAnimationsModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CarsSearchComponent,
    NavBarComponent,
    FlightComponent,
    HotelComponent,
    CruiseComponent,
    CarListComponent,
    SortComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
