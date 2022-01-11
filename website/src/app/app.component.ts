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
  hide = true;
  isSubscriptionPage = false;
  media: Subscription | undefined;
  mobile: boolean | undefined;
  isMenuOpen = false;
  // @ts-ignore
  @HostListener('window:scroll', ['$event'])


  constructor(
    public mediaObserver: MediaObserver,
    private readonly router: Router,
    // private readonly storageService: StorageService,
    private readonly dialog: MatDialog,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
  }

  ngOnInit() {
    this.scrolled = window.pageYOffset > 40;
    // this.media = this.mediaObserver.media$.subscribe((res: MediaChange) => {
    //   this.mobile = res.mqAlias === 'xs';
    // });
  }
  logOut() {
    // this.storageService.eraseCookie('customer');
    this.document.location.reload();
  }
  navigate(page: any) {
    if (page) {
      this.isMenuOpen = false;
      // this.dialog.closeAll();
      this.router.navigate([`/${page}`]).then();
    }
  }
}
