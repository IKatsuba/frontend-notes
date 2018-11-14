import { AfterViewInit, Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective implements AfterViewInit {
  @Output() public appIsVisible = new EventEmitter<any>();

  private _intersectionObserver: IntersectionObserver;

  constructor(private _element: ElementRef) {
  }

  public ngAfterViewInit(): void {
    this._intersectionObserver = new IntersectionObserver(entries => {
      this.checkForIntersection(entries);
    }, {});
    this._intersectionObserver.observe(<Element>(this._element.nativeElement));
  }

  private checkForIntersection = (entries: Array<IntersectionObserverEntry>) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (this.checkIfIntersecting(entry)) {
        this.appIsVisible.emit();
      }
    });
  };

  private checkIfIntersecting(entry: IntersectionObserverEntry) {
    return (<any>entry).isIntersecting && entry.target === this._element.nativeElement;
  }
}
