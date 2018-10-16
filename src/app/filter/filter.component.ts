import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Languages, SortTypes } from '@core/enums';
import { concat, Observable, of } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  public languages = [Languages.RU, Languages.EN];
  public sortBy = [SortTypes.PUBLISHED_AT, SortTypes.POPULARITY, SortTypes.RELEVANCY];

  @Input() count: number;

  public form = this.fb.group({
    q: [null],
    sources: [null],
    domains: [null],
    excludeDomains: [null],
    from: [null],
    to: [null],
    language: [Languages.RU],
    sortBy: [SortTypes.PUBLISHED_AT],
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
