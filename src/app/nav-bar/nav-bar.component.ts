import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  tabs: any[] = [
    {
      name: 'Cars',
      url: '/',
      icon: 'local_taxi',
    },
    {
      name: 'Flights',
      url: '/flight',
      icon: 'flight',
    },
    {
      name: 'Hotels',
      url: '/hotel',
      icon: 'hotel',
    },
    {
      name: 'Cruises',
      url: '/cruise',
      icon: 'directions_boat',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
