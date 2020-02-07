import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsPageRoutingModule } from './news-page-routing.module';
import { NewsPageComponent } from './news-page.component';
import { FilterComponent } from './filter';
import { NewsListComponent } from './news-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

import { ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from '../../core/share';
import { PageModule } from '../../core/page';
import { IsVisibleModule } from '../../core/is-visible';

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
    PageModule,
    IsVisibleModule
  ]
})
export class NewsPageModule {
}
