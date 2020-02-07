import { Directive, HostListener, Input } from '@angular/core';
import { ShareService } from './share.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Clipboard } from '@angular/cdk/clipboard';

@Directive({
  selector: '[appShare]'
})
export class ShareDirective {
  @Input() public shareUrl: string;
  @Input() public shareTitle: string;
  @Input() public shareText: string;

  constructor(private shareService: ShareService,
              private snackbar: MatSnackBar,
              private clipboard: Clipboard) {
  }

  @HostListener('click')
  public handleClick() {
    if (this.shareService.shareIsSupported()) {
      this.shareService.share({
        url: this.shareUrl,
        title: this.shareTitle,
        text: this.shareText
      });
    } else {
      this.clipboard.copy(this.shareUrl);
      this.snackbar.open('Copy to clipboard', 'Undo', {
        duration: 1500
      });
    }
  }
}
