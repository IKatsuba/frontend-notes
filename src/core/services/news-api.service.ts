import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { combineLatest, Observable } from 'rxjs';
import { FilterModel, NewsModel, ResponseModel } from '@core/models';
import { QueryService } from '@core/services/query.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  public query$: Observable<any | undefined>;
  private queryRef: AngularFirestoreDocument<{ excludeDomains?: string[], q?: string }>;

  constructor(private http: HttpClient,
              private q: QueryService,
              private db: AngularFirestore) {

    this.queryRef = this.db.collection('params').doc('newsQuery');
    this.query$ = this.queryRef.valueChanges();
  }

  public everything({language, sortBy, page, pageSize}: FilterModel): Observable<ResponseModel<NewsModel>> {
    return combineLatest(this.query$).pipe(
      switchMap(([{q, domains}]) => {
        return this.http.get<ResponseModel<NewsModel>>(environment.news.apiUrl + 'everything', {
          params: {
            language,
            sortBy,
            q,
            page: page.toString(),
            pageSize: pageSize.toString(),
            domains: domains.join(',')
          },
          headers: {
            'X-Api-Key': environment.news.apiKey
          }
        });
      })
    );
  }
}

