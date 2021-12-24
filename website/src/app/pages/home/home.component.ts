import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 plans = [
   {
     name: '4W Freedom Plan',
     icon: 'settings',
     price: 699,
     services: [
       {name: 'Free accommodation', status: true},
       {name: 'One time Taxi Support', status: true},
       {name: 'incidental Charges', status: false},
       {name: 'No insurance', status: false},
       {name: 'Towing Services', status: true},
     ]
   },
   {
     name: '2 Wheeler Pro',
     icon: 'settings',
     price: 1299,
     services: [
       {name: 'Free accommodation', status: true},
       {name: 'One time Taxi Support', status: true},
       {name: 'incidental Charges', status: false},
       {name: 'No insurance', status: false},
       {name: 'Towing Services', status: true},
     ]
   },
   {
     name: '4 Wheeler Pro',
     icon: 'settings',
     price: 2749,
     services: [
       {name: 'Free accommodation', status: true},
       {name: 'One time Taxi Support', status: true},
       {name: 'incidental Charges', status: false},
       {name: 'No insurance', status: false},
       {name: 'Towing Services', status: true},
     ]
   }
 ];
  constructor(
    @Inject(DOCUMENT) private readonly document: Document
  ) {

  }

  ngOnInit(): void {
  }

}
