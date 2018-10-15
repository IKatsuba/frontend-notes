import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NewsApiService } from '@core/services';
import { FilterComponent } from './filter/filter.component';
import { debounceTime, mergeMap, tap } from 'rxjs/operators';
import { FilterModel, NewsModel, ResponseModel } from '@core/models';
import { concat, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterContentInit {
  @ViewChild('filter') filter: FilterComponent;
  public list: NewsModel[];
  public count: number;

  constructor(public news: NewsApiService,
              private cd: ChangeDetectorRef) {
  }

  public ngAfterContentInit(): void {
    concat(
      of(this.filter.form.value),
      this.filter.form.valueChanges
    ).pipe(
      debounceTime(1000),
      mergeMap<FilterModel, ResponseModel<NewsModel>>(values => this.news.everything(values)),
      tap(({articles, totalResults}) => {
        this.list = articles;
        this.count = totalResults;
        this.cd.markForCheck();
      })
    ).toPromise();
  }

  public trackByFn(index, item) {
    return item.url;
  }
}
