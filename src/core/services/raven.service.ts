import { ErrorHandler, Inject, InjectionToken } from '@angular/core';

export const RAVEN_DSN = new InjectionToken('RAVEN_DSN');

export class RavenService extends ErrorHandler {
  private raven;

  constructor(@Inject(RAVEN_DSN) private ravenDSN: string) {
    super();
  }

  public async handleError(e) {
    if (this.ravenDSN) {
      if (!this.raven) {
        await this.initRaven();
      }
      this.raven.captureException(e);
    }

    super.handleError(e);
  }

  private async initRaven() {
    const Raven = await import('raven-js').then((m: any) => m.default);
    Raven.config(this.ravenDSN).install();
    this.raven = Raven;
  }
}
