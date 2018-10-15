import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { FilterModel, NewsModel, ResponseModel } from '@core/models';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { mergeMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private queryRef: AngularFirestoreDocument<{ excludeDomains?: string[], q?: string, domains?: string[] }>;

  constructor(private http: HttpClient,
              private db: AngularFirestore) {

    this.queryRef = this.db.collection('params').doc('newsQuery');
  }

  public everything({language, sortBy, page, pageSize}: FilterModel): Observable<ResponseModel<NewsModel>> {
    return this.queryRef.valueChanges().pipe(
      take(1),
      mergeMap(({q, domains}) => {
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

