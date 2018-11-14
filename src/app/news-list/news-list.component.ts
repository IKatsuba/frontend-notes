import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Article } from '@katsuba/newsapi';
import { CdkScrollable } from '@angular/cdk/overlay';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent {
  @Output() public fetch = new EventEmitter<any>();
  @Input() public news: Article[];
  @ViewChild(CdkScrollable) scrollRef: CdkScrollable;

  public trackByFn(index, item) {
    return item.url;
  }
}
