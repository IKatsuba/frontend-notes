import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './filter';
import { ReactiveFormsModule } from '@angular/forms';
import { RAVEN_DSN, RavenService } from '@core/services';
import { AngularFireModule, FirebaseNameOrConfigToken, FirebaseOptionsToken } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NewsListComponent } from './news-list';
import { NewsApi } from '@katsuba/newsapi';
import { IsVisibleModule } from '@core/is-visible';
import { ShareModule } from '@core/share';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    AngularFireModule,
    AngularFirestoreModule.enablePersistence(),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    IsVisibleModule,
    MatProgressSpinnerModule,
    ShareModule,
    MatSnackBarModule
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
