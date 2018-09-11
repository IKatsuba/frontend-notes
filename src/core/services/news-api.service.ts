import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { FilterModel, NewsModel, ResponseModel } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  constructor(private http: HttpClient) {
  }

  public everything({language, sortBy, page, pageSize}: FilterModel): Observable<ResponseModel<NewsModel>> {
    return this.http.get<ResponseModel<NewsModel>>(environment.API_URL + 'everything', {
      params: {
        language,
        sortBy,
        q: 'frontend',
        page: page.toString(),
        pageSize: pageSize.toString()
      },
      headers: {
        'X-Api-Key': '022242c86959436495a04d00b0635a24'
      }
    });
  }
}
