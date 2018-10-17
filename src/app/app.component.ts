import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NewsApiService } from '@core/services';
import { FilterComponent } from './filter';
import { debounceTime, mergeMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ArticleResponse, EverythingPayload } from '@katsuba/newsapi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterContentInit {
  @ViewChild('filter') filter: FilterComponent;

  public news$: Observable<ArticleResponse>;
  public count: number;

  constructor(public news: NewsApiService,
              private cd: ChangeDetectorRef) {
  }

  public ngAfterContentInit(): void {
    this.news$ = this.filter.changes.pipe(
      debounceTime(1000),
      mergeMap<EverythingPayload, ArticleResponse>(values => this.news.everything(values)),
      tap((res) => {
        this.count = res.totalResults;
        this.cd.markForCheck();
      })
    );
  }
}
