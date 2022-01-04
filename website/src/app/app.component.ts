import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'website';
  scrolled = false;
  hide = true;
  @HostListener('window:scroll', ['$event'])
  ngOnInit() {
    this.scrolled = window.pageYOffset > 600;
  }
}
