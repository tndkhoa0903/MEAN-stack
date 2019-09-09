import {
  Directive,
  HostBinding,
  HostListener,
  ElementRef,
  Renderer2
} from '@angular/core';
import { delay } from 'q';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '.display'
})
export class Btnbot2topDirective {
  isScroll: boolean;
  currScroll;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    this.isScroll = false;
  }

  @HostBinding('style.display') displayKey = 'none';
  @HostListener('window:scroll', [])
  onWidownScroll() {
    window.scrollY >= 200 ? (this.isScroll = true) : (this.isScroll = false);
    this.isScroll === true
      ? (this.displayKey = 'block')
      : (this.displayKey = 'none');
  }
  @HostListener('click', [])
  onClickBottomToTop() {
    document.documentElement.scrollTop = 0;
  }
}
