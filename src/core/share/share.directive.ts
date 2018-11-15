import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';
import * as Clipboard from 'clipboard';
import { ShareService } from '@core/share/share.service';
import { MatSnackBar } from '@angular/material';

@Directive({
  selector: '[appShare]'
})
export class ShareDirective implements AfterViewInit {
  @Input() public shareUrl: string;
  @Input() public shareTitle: string;
  @Input() public shareText: string;

  private _clipboard: Clipboard;

  constructor(private el: ElementRef<Element>,
              private shareService: ShareService,
              private snackbar: MatSnackBar) {
  }

  public ngAfterViewInit(): void {
    this._clipboard = new Clipboard(this.el.nativeElement);
    this.el.nativeElement.setAttribute('data-clipboard-text', this.shareUrl);
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
      this.snackbar.open('Copy to clipboard', 'Undo', {
        duration: 1500
      });
    }
  }
}
