import { Component, OnInit } from '@angular/core';
import { Tab } from '../shared/models/tab.model';
import { Tabs } from './nav-bar.config';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  tabs: Tab[] = Tabs;
  constructor() {}

  ngOnInit(): void {}
}
