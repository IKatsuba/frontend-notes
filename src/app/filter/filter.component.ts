import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { concat, merge, Observable, of } from 'rxjs';
import { Languages, SortBy } from '@katsuba/newsapi';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  public languages = [Languages.RU, Languages.EN];
  public sortBy = [
    {value: SortBy.PUBLISHEDAT, title: 'Published at'},
    {value: SortBy.POPULARITY, title: 'Popularity'},
    {value: SortBy.RELEVANCY, title: 'Relevancy'},
  ];

  @Input() count: number;

  public form = this.fb.group({
    q: [null],
    sources: [null],
    domains: [null],
    excludeDomains: [null],
    from: [null],
    to: [null],
    language: [Languages.RU],
    sortBy: [SortBy.PUBLISHEDAT],
    pageSize: [10],
    page: [1]
  });

  public changes: Observable<any> = concat(
    of(this.form.value),
    this.form.valueChanges
  );

  constructor(private fb: FormBuilder) {
    merge(
      this.form.get('sortBy').valueChanges,
      this.form.get('language').valueChanges
    ).pipe(
      tap(() => this.form.get('pageSize').setValue(10))
    ).toPromise();
  }
}
