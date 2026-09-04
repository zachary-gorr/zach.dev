import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Metric } from '../../models/resume.model';

@Component({
  selector: 'app-metric-strip',
  standalone: true,
  // Block-level so a host transform (e.g. appReveal) has something to move.
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Deliberately understated: these all come from one initiative, so they
  // support the summary above rather than headline the page.
  template: `
    <dl class="grid grid-cols-1 gap-x-10 gap-y-4 border-t border-line pt-5 sm:grid-cols-2">
      @for (metric of metrics(); track metric.label) {
        <div class="flex items-baseline gap-2.5">
          <dd class="w-14 shrink-0 font-mono text-sm font-medium tabular-nums text-accent-text">{{ metric.value }}</dd>
          <dt class="text-xs leading-relaxed text-dim">
            <span class="text-muted">{{ metric.label }}</span>
            <span class="text-dim"> — {{ metric.detail }}</span>
          </dt>
        </div>
      }
    </dl>
  `,
})
export class MetricStripComponent {
  readonly metrics = input.required<Metric[]>();
}
