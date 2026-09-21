import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollText]',
})
export class ScrollText implements OnInit {
  private el: ElementRef<HTMLElement> = inject(ElementRef);

  ngOnInit(): void {
    const text: string = this.el.nativeElement.textContent.trim();
    const ribbon: string[] = Array(10).fill(text);
    this.el.nativeElement.textContent = ribbon.join('; ');
  }
}
