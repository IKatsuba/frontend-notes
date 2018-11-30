import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageRoutingModule } from './about-page-routing.module';
import { AboutPageComponent } from './about-page.component';
import { PageModule } from '@core/page';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    AboutPageRoutingModule,
    PageModule,
    MarkdownModule.forChild()
  ]
})
export class AboutPageModule {
}
