import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsPageRoutingModule } from './news-page-routing.module';
import { NewsPageComponent } from './news-page.component';
import { FilterComponent } from './filter';
import { NewsListComponent } from './news-list';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule, MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from '@core/share';
import { RouterModule } from '@angular/router';
import { IsVisibleModule } from '@core/is-visible';
import { PageModule } from '@core/page';

@NgModule({
  declarations: [
    NewsPageComponent,
    FilterComponent,
    NewsListComponent
  ],
  imports: [
    CommonModule,
    NewsPageRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    ShareModule,
    MatIconModule,
    IsVisibleModule,
    PageModule
  ]
})
export class NewsPageModule {
}
