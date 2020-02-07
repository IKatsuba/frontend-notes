import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule, FirebaseNameOrConfigToken, FirebaseOptionsToken } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NewsApi } from '@katsuba/newsapi';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    AngularFireModule,
    AngularFirestoreModule.enablePersistence(),
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    MatSnackBarModule,
    MarkdownModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [
    {provide: FirebaseOptionsToken, useValue: environment.firebase},
    {provide: FirebaseNameOrConfigToken, useValue: 'frontend-notes'},
    {provide: NewsApi, useFactory: () => new NewsApi(environment.news.apiKey)}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
