import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NewsApiService } from '@core/services';
import { FilterComponent } from './filter';
import { debounceTime, map, mergeMap, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Article, ArticleResponse, EverythingPayload } from '@katsuba/newsapi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterContentInit {
  @ViewChild('filter') filter: FilterComponent;

  public news$: Observable<Article[]>;
  public count: number;
  public loading = false;

  constructor(public news: NewsApiService,
              private cd: ChangeDetectorRef) {
  }

  public ngAfterContentInit(): void {
    this.news$ = this.filter.changes.pipe(
      debounceTime(1000),
      mergeMap<EverythingPayload, ArticleResponse>(values => this.news.everything(values)),
      map((res) => res.articles)
    );
  }

  public fetch() {
    this.filter.form.setValue({
      ...this.filter.form.value,
      pageSize: this.filter.form.value.pageSize + 10
    });
  }
}
