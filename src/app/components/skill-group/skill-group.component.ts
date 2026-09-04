import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SkillGroup } from '../../models/resume.model';

@Component({
  selector: 'app-skill-group',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Core skills lead each group and carry the accent treatment so the section
  // scans for depth rather than reading as one flat wall of chips.
  template: `
    <div class="border-t border-line py-5 first:border-t-0 first:pt-0">
      <h3 class="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">{{ group().name }}</h3>
      <ul class="flex flex-wrap gap-2">
        @for (skill of group().core; track skill) {
          <li
            class="rounded-md border border-accent-line bg-accent-soft px-2.5 py-1 font-mono text-xs font-medium text-accent-text"
          >
            {{ skill }}
          </li>
        }
        @for (skill of group().supporting; track skill) {
          <li class="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-xs text-muted">
            {{ skill }}
          </li>
        }
      </ul>
    </div>
  `,
})
export class SkillGroupComponent {
  readonly group = input.required<SkillGroup>();
}
