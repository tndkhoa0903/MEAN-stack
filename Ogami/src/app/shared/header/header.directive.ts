import {
  Directive,
  HostListener,
  HostBinding,
  Renderer2,
  ElementRef
} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '.header'
})
export class HeaderDirective {
  scrolling: boolean;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    this.scrolling = false;
  }
  @HostListener('window:scroll', [])
  onWidownScroll() {
    window.scrollY >= 200 ? (this.scrolling = true) : (this.scrolling = false);
    this.scrolling === true
      ? this.renderer.addClass(this.elRef.nativeElement, 'sticky')
      : this.renderer.removeClass(this.elRef.nativeElement, 'sticky');
  }
}
