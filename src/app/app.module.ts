import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MatSnackBarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { RAVEN_DSN, RavenService } from '@core/services';
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
    MarkdownModule.forRoot()
  ],
  providers: [
    {provide: ErrorHandler, useClass: RavenService},
    {provide: FirebaseOptionsToken, useValue: environment.fb},
    {provide: FirebaseNameOrConfigToken, useValue: 'frontend-notes'},
    {provide: NewsApi, useFactory: () => new NewsApi(environment.news.apiKey)},
    {provide: RAVEN_DSN, useValue: environment.DSN},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
