import { AfterContentInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FilterComponent } from './filter';
import { Observable } from 'rxjs';
import { Article, ArticleResponse, EverythingPayload } from '@katsuba/newsapi';
import { NewsApiService } from '@core/services';
import { debounceTime, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements AfterContentInit {
  @ViewChild('filter') filter: FilterComponent;

  public news$: Observable<Article[]>;
  public count: number;

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
