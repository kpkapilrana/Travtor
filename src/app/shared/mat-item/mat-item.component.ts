import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-item',
  templateUrl: './mat-item.component.html',
  styleUrls: ['./mat-item.component.css']
})
export class MatItemComponent implements OnInit {
@Input() car:any;
  constructor() { }

  ngOnInit(): void {
  }

}
