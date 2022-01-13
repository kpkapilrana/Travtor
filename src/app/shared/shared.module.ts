import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatItemComponent } from './mat-item/mat-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

const MatModule =[
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule
];

@NgModule({
  declarations: [
    MatItemComponent
  ],
  imports: [
    CommonModule,
    ...MatModule,
    FlexLayoutModule
  ],
  exports:[
    ...MatModule,
    FlexLayoutModule,
    MatItemComponent
  ]
})
export class SharedModule { }
