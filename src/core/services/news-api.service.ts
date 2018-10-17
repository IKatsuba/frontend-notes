import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { mergeMap, take } from 'rxjs/operators';
import { ArticleResponse, EverythingPayload, NewsApi } from '@katsuba/newsapi';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private queryRef: AngularFirestoreDocument<{ excludeDomains?: string[], q?: string, domains?: string[] }>;

  constructor(private http: HttpClient,
              private db: AngularFirestore,
              private newsApi: NewsApi) {

    this.queryRef = this.db.collection('params').doc('newsQuery');
  }

  public everything({language, sortBy, page, pageSize}: EverythingPayload): Observable<ArticleResponse> {
    return this.queryRef.valueChanges().pipe(
      take(1),
      mergeMap(({q, domains}) =>
        this.newsApi.everything({language, sortBy, q, page, pageSize, domains}))
    );
  }
}

