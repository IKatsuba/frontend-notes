import { ErrorHandler, Inject, Injectable, InjectionToken } from '@angular/core';
import { captureException, captureMessage, init, Severity } from '@sentry/browser';

export { Severity } from '@sentry/browser';

export const RAVEN_DSN = new InjectionToken('RAVEN_DSN');

@Injectable({
  providedIn: 'root'
})
export class RavenService extends ErrorHandler {
  constructor(@Inject(RAVEN_DSN) private ravenDSN: string) {
    super();

    if (this.ravenDSN) {
      init({dsn: this.ravenDSN});
    }
  }

  public async handleError(e) {
    if (this.ravenDSN) {
      captureException(e);
    }

    super.handleError(e);
  }

  public captureMessage(message: string, level?: Severity) {
    if (this.ravenDSN) {
      captureMessage(message, level);
    }
  }

}
