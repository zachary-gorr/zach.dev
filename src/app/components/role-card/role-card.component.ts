import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { Role } from '../../models/resume.model';
import { CompanyMarkComponent } from '../company-mark/company-mark.component';

@Component({
  selector: 'app-role-card',
  standalone: true,
  imports: [CompanyMarkComponent],
  // Block-level so a host transform (e.g. appReveal) has something to move.
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="relative pl-8">
      <!-- Timeline rail: a dot per role, connected down the column. -->
      <span class="absolute left-[5px] top-3 h-2 w-2 rounded-full" [class]="dotClass()" aria-hidden="true"></span>

      <div class="rounded-xl border border-line bg-surface p-5 sm:p-6">
        <header class="flex flex-wrap items-start justify-between gap-4">
          <div class="flex items-start gap-4">
            <app-company-mark [mark]="role().mark" [company]="role().company" />
            <div>
              <h3 class="font-semibold leading-snug text-content">{{ role().title }}</h3>
              <p class="mt-0.5 text-sm text-muted">
                {{ role().company }} <span class="text-dim">·</span> {{ role().location }}
              </p>
            </div>
          </div>

          <span
            class="rounded-md px-2 py-1 font-mono text-xs"
            [class]="role().current
              ? 'bg-accent-soft text-accent-text'
              : 'border border-line text-muted'"
          >
            {{ role().start }} – {{ role().end }}
          </span>
        </header>

        <p class="mt-4 text-sm leading-relaxed text-muted">{{ role().blurb }}</p>

        @if (role().initiatives.length) {
          <button
            type="button"
            (click)="toggle()"
            [attr.aria-expanded]="expanded()"
            [attr.aria-controls]="panelId()"
            class="mt-4 flex items-center gap-1.5 text-xs font-medium text-accent-text transition-opacity hover:opacity-75"
          >
            <svg
              viewBox="0 0 20 20"
              class="h-3.5 w-3.5 transition-transform duration-200"
              [class.rotate-180]="expanded()"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M5.2 7.4 10 12.2l4.8-4.8H5.2z" />
            </svg>
            {{ expanded() ? 'Hide' : 'Show' }} {{ countLabel() }}
          </button>

          <!--
            The panel stays mounted so it can animate open and closed, and so
            aria-controls always resolves to a real element. Height animates via
            grid-template-rows; each initiative then slides in on a stagger.
          -->
          <div
            [id]="panelId()"
            class="grid transition-[grid-template-rows] duration-300 ease-out"
            [style.grid-template-rows]="expanded() ? '1fr' : '0fr'"
            [attr.aria-hidden]="expanded() ? null : 'true'"
            [attr.inert]="expanded() ? null : ''"
          >
            <div class="overflow-hidden">
              <div class="mt-5 space-y-5 border-t border-line pt-5">
                @for (initiative of role().initiatives; track initiative.name; let i = $index) {
                  <div
                    class="transition-[opacity,transform] duration-500 ease-out"
                    [class]="expanded() ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'"
                    [style.transition-delay]="revealDelay(i)"
                  >
                    <h4 class="text-sm font-semibold text-content">{{ initiative.name }}</h4>
                    <p class="mt-0.5 font-mono text-xs text-accent-text">{{ initiative.scope }}</p>
                    <p class="mt-2 text-sm leading-relaxed text-muted">{{ initiative.description }}</p>
                  </div>
                }
              </div>
            </div>
          </div>
        }
      </div>
    </article>
  `,
})
export class RoleCardComponent {
  readonly role = input.required<Role>();

  private readonly isExpanded = signal(false);
  readonly expanded = this.isExpanded.asReadonly();

  readonly panelId = computed(() => `role-${this.role().id}-initiatives`);

  readonly dotClass = computed(() =>
    this.role().current ? 'bg-accent ring-4 ring-accent-soft' : 'bg-line-strong',
  );

  readonly countLabel = computed(() => {
    const count = this.role().initiatives.length;
    return `${count} ${count === 1 ? 'initiative' : 'initiatives'}`;
  });

  /** Staggered on the way in for a sense of unfolding; instant on the way out. */
  revealDelay(index: number): string {
    return this.isExpanded() ? `${120 + index * 90}ms` : '0ms';
  }

  toggle(): void {
    this.isExpanded.update((value) => !value);
  }
}
