import { Component, Input } from '@angular/core';
import { NewsModel, ResponseModel } from '@core/models';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent {
  @Input() public news: ResponseModel<NewsModel>;

  public trackByFn(index, item) {
    return item.url;
  }
}
