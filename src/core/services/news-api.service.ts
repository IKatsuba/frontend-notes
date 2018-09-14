import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { FilterModel, NewsModel, ResponseModel } from '@core/models';
import { QueryService } from '@core/services/query.service';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  constructor(private http: HttpClient, private q: QueryService) {
  }

  public everything({language, sortBy, page, pageSize}: FilterModel): Observable<ResponseModel<NewsModel>> {
    return this.http.get<ResponseModel<NewsModel>>(environment.API_URL + 'everything', {
      params: {
        language,
        sortBy,
        q: this.q.or(
          'javascript',
          this.q.and('android', 'flutter'),
          this.q.and('ios', 'flutter'),
          'typescript',
          'css',
          'scss',
          'nodejs',
          'node.js',
          'angular',
          'react',
          'npm',
          'browsers',
          'браузеры',
          'web',
          'фронтенд',
          'frontend',
          this.q.not('\'java\'', '\'разработка игр\'', 'e-commerce', 'iptelefon')
        ).toString(),
        page: page.toString(),
        pageSize: pageSize.toString(),
        excludeDomains: 'theoryandpractice.ru,dou.ua,linux.org.ru,fishki.net,stackoverflow.com,' +
          'gamasutra.com,nreionline.com,cnews.ru,webcafe.bg,tass.ru,rambler.ru,yandex.ru,comss.ru,' +
          'securitylab.ru,lifehacker.ru,lenta.ru'
      },
      headers: {
        'X-Api-Key': '022242c86959436495a04d00b0635a24'
      }
    });
  }
}
