export interface ResponseModel<T> {
  status: 'ok' | 'error';
  totalResults: number;
  articles: T[];
}
