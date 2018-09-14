import { Injectable } from '@angular/core';
import { Query, QueryValue } from '@core/models';
import { QueryOperators } from '@core/enums';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  public or(...values: QueryValue[]) {
    return new Query(values, {operator: QueryOperators.OR});
  }

  public and(...values: QueryValue[]) {
    return new Query(values, {operator: QueryOperators.AND});
  }

  public not(...values: QueryValue[]) {
    return new Query(values, {operator: QueryOperators.NOT});
  }
}
