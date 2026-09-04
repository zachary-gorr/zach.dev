import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  afterNextRender,
  inject,
  input,
  signal,
} from '@angular/core';
import { Profile, SiteSection } from '../../models/resume.model';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-site-rail',
  standalone: true,
  imports: [ThemeToggleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-rail.component.html',
})
export class SiteRailComponent {
  readonly profile = input.required<Profile>();
  readonly sections = input.required<SiteSection[]>();

  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  readonly activeSection = signal<string>('');

  constructor() {
    // afterNextRender only runs in the browser, so IntersectionObserver is safe here.
    afterNextRender(() => this.trackActiveSection());
  }

  private trackActiveSection(): void {
    const targets = this.sections()
      .map(({ id }) => this.document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!targets.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (visible) {
          this.activeSection.set(visible.target.id);
        }
      },
      // Focus the band just below the viewport top so the "current" section
      // changes as a heading reaches reading position.
      { rootMargin: '-10% 0px -70% 0px', threshold: 0 },
    );

    targets.forEach((target) => observer.observe(target));
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
