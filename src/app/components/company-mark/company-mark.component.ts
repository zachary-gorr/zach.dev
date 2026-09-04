import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';

interface MarkAsset {
  src: string;
  /**
   * Wordmarks are far wider than tall, so they get sized by width and would be
   * illegible at the square glyph size.
   */
  wordmark?: boolean;
  /**
   * Flatten the artwork to white on the dark palette (see `.mark-white-on-dark`
   * in styles.scss). Set for the marks we ship, whose supplied colours are all
   * dark enough to disappear against the dark surface. Leave off for artwork
   * whose colour has to survive — a full-colour logo would be destroyed by it.
   */
  whiteOnDark?: boolean;
}

/**
 * Company logos we ship an asset for; anything else renders as a monogram. A
 * mapped asset that fails to load also falls back to the monogram, so a missing
 * file never renders as a broken image.
 *
 * The Disney artwork is a flat black wordmark on transparency, hence both flags.
 * Publishing it is external brand usage and needs brand/legal sign-off.
 */
const MARK_ASSETS: Record<string, MarkAsset> = {
  disney: { src: 'assets/disney_logo_dark.png', wordmark: true, whiteOnDark: true },
  villages: { src: 'assets/villages-v.svg', whiteOnDark: true },
  medigi: { src: 'assets/medigi-m.svg', whiteOnDark: true },
};

@Component({
  selector: 'app-company-mark',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-raised"
      aria-hidden="true"
    >
      @if (asset(); as mark) {
        <img
          [src]="mark.src"
          alt=""
          class="object-contain"
          [class]="mark.wordmark ? 'h-auto w-8' : 'h-5 w-5'"
          [class.mark-white-on-dark]="mark.whiteOnDark"
          (error)="onAssetMissing()"
        />
      } @else {
        <span class="font-mono text-base font-medium text-accent-text">{{ initial() }}</span>
      }
    </div>
  `,
})
export class CompanyMarkComponent {
  readonly mark = input<string>('');
  readonly company = input.required<string>();

  /** Set when the mapped asset fails to load, which drops us to the monogram. */
  private readonly assetMissing = signal(false);

  readonly asset = computed(() =>
    this.assetMissing() ? null : (MARK_ASSETS[this.mark()] ?? null),
  );
  readonly initial = computed(() => this.company().charAt(0).toUpperCase());

  protected onAssetMissing(): void {
    this.assetMissing.set(true);
  }
}
