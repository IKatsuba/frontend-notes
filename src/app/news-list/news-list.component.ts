import { Component, Input } from '@angular/core';
import { ArticleResponse } from '@katsuba/newsapi';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent {
  @Input() public news: ArticleResponse;

  public trackByFn(index, item) {
    return item.url;
  }
}
