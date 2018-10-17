import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { concat, Observable, of } from 'rxjs';
import { Languages, SortBy } from '@katsuba/newsapi';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  public languages = [Languages.RU, Languages.EN];
  public sortBy = [SortBy.PUBLISHEDAT, SortBy.POPULARITY, SortBy.RELEVANCY];

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
  }

  public onPage({length, pageIndex, pageSize, previousPageIndex}) {
    this.form.setValue({
      ...this.form.value,
      pageSize,
      page: pageIndex + 1
    });
  }
}
