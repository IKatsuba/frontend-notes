import { ErrorHandler } from '@angular/core';
import { environment } from '../../environments/environment';

export class RavenService extends ErrorHandler {
  private raven;

  public async handleError(e) {
    if (environment.DSN) {
      if (!this.raven) {
        await this.initRaven();
      }
      this.raven.captureException(e);
    }

    super.handleError(e);
  }

  private async initRaven() {
    const Raven = await import('raven-js').then((m: any) => m.default);
    Raven.config(environment.DSN).install();
    this.raven = Raven;
  }
}
