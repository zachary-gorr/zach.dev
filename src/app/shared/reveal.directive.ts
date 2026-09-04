import {
  DestroyRef,
  Directive,
  ElementRef,
  afterNextRender,
  inject,
  input,
  signal,
} from '@angular/core';

/**
 * Reveals the host element once it scrolls into view, so sections unfold as the
 * reader finds them rather than all at once.
 *
 * The hidden-until-seen styling lives behind `html.js` (set by the pre-paint
 * script in index.html), so server-rendered and script-less output stays fully
 * visible and nothing can strand content at opacity 0.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: {
    class: 'reveal',
    '[class.is-revealed]': 'revealed()',
    '[style.transition-delay]': 'revealed() ? delayMs() : null',
  },
})
export class RevealDirective {
  /** Stagger, in ms, for items that enter the viewport together. */
  readonly appRevealDelay = input(0);

  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  private readonly isRevealed = signal(false);
  readonly revealed = this.isRevealed.asReadonly();

  constructor() {
    afterNextRender(() => this.observe());
  }

  protected delayMs(): string {
    return `${this.appRevealDelay()}ms`;
  }

  private observe(): void {
    const node = this.element.nativeElement;

    if (typeof IntersectionObserver === 'undefined') {
      this.isRevealed.set(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }
          this.isRevealed.set(true);
          observer.unobserve(entry.target);
        }
      },
      // Hold off until the element is a little way into the viewport.
      { rootMargin: '0px 0px -12% 0px', threshold: 0.15 },
    );

    observer.observe(node);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
