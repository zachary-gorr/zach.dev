import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  // Block-level so a host transform (e.g. appReveal) has something to move.
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="mb-8 flex items-center gap-4">
      <span class="font-mono text-xs text-accent-text">{{ index() }}</span>
      <h2 class="text-sm font-semibold uppercase tracking-[0.18em] text-content">{{ label() }}</h2>
      <span class="h-px flex-1 bg-line"></span>
    </div>
  `,
})
export class SectionHeadingComponent {
  readonly index = input.required<string>();
  readonly label = input.required<string>();
}
