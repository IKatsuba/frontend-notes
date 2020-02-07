import { Component, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  @ViewChild('snav') private snav: MatSidenav;

  constructor(public router: Router, private location: Location) {
  }

  public get hasPrevHistory(): boolean {
    return !this.location.isCurrentPathEqualTo('/');
  }

  public buttonClick() {
    if (this.hasPrevHistory) {
      this.location.back();
    } else {
      this.snav.open();
    }
  }
}
