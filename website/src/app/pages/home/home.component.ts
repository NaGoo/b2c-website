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
  newsList = [{headLine: 'Shell with ReadyAssist to set up quick lube change sites across India',
    newsUrl: 'https://auto.economictimes.indiatimes.com/news/oil-and-lubes/shell-partners-with-readyassist-to-offer-free-lube-change-service-at-5500-retail-locations/86547937',
    desc: 'New Delhi: Leading global lubricant supplier Shell on Monday joined hands with the Bengaluru-based 24x7 roadside assistance startup ReadyAssist to offer a convenient oil change service across the country.',
    url: '../../assets/news/news4.jpeg',
    article: 'ET Auto.com',
    logo: '../../assets/news/et-auto.png'},
    {headLine: 'ReadyAssist Partners With DriveU To Offer Special Roadside Assistance Plan For Weekends',
      newsUrl: 'https://www.carandbike.com/news/readyassist-partners-with-driveu-to-offer-special-roadside-assistance-plan-for-weekends-2518659',
      desc: 'ReadyAssist has designed a unique first-of- its-kind Weekend RSA Subscription Plan that will provide\n' +
        '                      24/7 Roadside Assistance support PAN India for three days, for DriveU\n' +
        '                      customers.', url: '../../assets/news/news1.jpeg',
      article: 'Car&Bike.com',
      logo: '../../assets/images/car-&-bike-logo.png'},
    {headLine: 'Stuck In Monsoon? Here Are 5 Best Vehicle Breakdown Assistance available',
      newsUrl: 'http://bwautoworld.businessworld.in/article/Stuck-In-Monsoon-Here-Are-5-Best-Vehicle-Breakdown-Assistance/20-08-2021-401207/',
      desc: 'Here are the five best vehicle breakdown assistance platforms that can help/rescue you during monsoon if you are stuck in the middle of the road:',
      url: '../../assets/news/flood.jpg',
      article: 'BW Auto World',
      logo: '../../assets/images/bw-auto-world.png'},
    {headLine: 'This on-demand vehicle service and repair startup registered Rs 4 Cr revenue in first year of operation',
      newsUrl: 'https://yourstory.com/2020/06/on-demand-vehicle-service-repair-startup-readyassist/amp',
      desc: 'Here are the five best vehicle breakdown assistance platforms that can help/rescue you during monsoon\n' +
        '                      if you are stuck in the middle of the road:', url: '../../assets/news/news2.jpeg',
      article: 'YOURSTORY',
      logo: '../../assets/newIcons/logo_yourstory.svg'}];
  constructor(
    @Inject(DOCUMENT) private readonly document: Document
  ) {

  }

  ngOnInit(): void {
  }

}
