import { QueryOperators } from '@core/enums';

export type QueryValue = string | Query;

export class Query {
  private readonly operator: QueryOperators;

  constructor(public readonly values: QueryValue[], {operator}: { operator: QueryOperators }) {
    this.operator = operator;
  }

  public toString() {
    const string = '(' + this.values.join(` ${this.operator === QueryOperators.NOT ? QueryOperators.OR : this.operator} `) + ')';
    return this.operator === QueryOperators.NOT
      ? 'NOT ' + string
      : string;
  }
}
