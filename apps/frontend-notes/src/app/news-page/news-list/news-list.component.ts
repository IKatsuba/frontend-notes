import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Article } from '@katsuba/newsapi';
import { CdkScrollable } from '@angular/cdk/overlay';
import { animate, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ transform: 'translateY(100%)', opacity: 0 }),
          animate('0.7s cubic-bezier(.62,.28,.23,.99)',
            style({ transform: 'translateY(0)', opacity: 1 }))
        ])
      ])
    ])
  ]
})
export class NewsListComponent {
  @Output() public fetch = new EventEmitter<any>();
  @Input() public news: Article[];
  @ViewChild(CdkScrollable) scrollRef: CdkScrollable;

  public trackByFn(index, item) {
    return item.url;
  }
}
