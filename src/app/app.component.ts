import { AfterContentInit, Component, ViewChild } from '@angular/core';
import { NewsApiService } from '@core/services';
import { FilterComponent } from './filter/filter.component';
import { debounceTime, startWith, switchMap, tap } from 'rxjs/operators';
import { FilterModel, NewsModel, ResponseModel } from '@core/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  @ViewChild('filter') filter: FilterComponent;
  public list: NewsModel[] = [];
  public count = 0;

  constructor(public news: NewsApiService) {
  }

  public ngAfterContentInit(): void {
    this.filter.form.valueChanges.pipe(
      startWith(this.filter.form.value),
      tap(() => console.count('CO')),
      debounceTime(1000),
      switchMap<FilterModel, ResponseModel<NewsModel>>(values => this.news.everything(values)),
      tap((response) => {
        this.list = response.articles;
        this.count = response.totalResults;
      })
    ).toPromise();
  }
}
