import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  public shareIsSupported(): boolean {
    return !!navigator.share;
  }

  public async share(options: ShareOptions) {
    if (this.shareIsSupported()) {
      return await navigator.share(options);
    }
  }
}
