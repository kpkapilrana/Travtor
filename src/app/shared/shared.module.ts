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
import {MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

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
  MatAutocompleteModule,
  MatDividerModule,
  MatRadioModule,
  MatSnackBarModule,
  MatButtonToggleModule
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
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
})
export class SharedModule { }
