import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatSelectModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './filter';
import { ReactiveFormsModule } from '@angular/forms';
import { RavenService } from '@core/services';
import { AngularFireModule, FirebaseNameOrConfigToken, FirebaseOptionsToken } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NewsListComponent } from './news-list';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    AngularFireModule,
    AngularFirestoreModule.enablePersistence(),
    MatChipsModule,
    MatIconModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: RavenService},
    {provide: FirebaseOptionsToken, useValue: environment.fb},
    {provide: FirebaseNameOrConfigToken, useValue: 'frontend-notes'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
