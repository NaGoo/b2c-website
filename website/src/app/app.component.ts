import { DOCUMENT } from '@angular/common';
import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import { Router } from '@angular/router';
import {Subscription} from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'website';
  scrolled = false;
  isMenuOpen = false;
  hide = true;
  @HostListener('window:scroll', ['$event'])
  ngOnInit() {
    this.scrolled = window.pageYOffset > 40;
  }
  logOut() {
    // this.storageService.eraseCookie('customer');
    // this.document.location.reload();
  }
  navigate(page: any) {
    // if (page) {
    //   this.isMenuOpen = false;
    //   // this.dialog.closeAll();
    //   this.router.navigate([`/${page}`]).then();
    // }
  }
}
