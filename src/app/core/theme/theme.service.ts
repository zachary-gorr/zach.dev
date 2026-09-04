import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, computed, inject, signal, PLATFORM_ID } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'zach.dev:theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private readonly current = signal<Theme>('dark');

  readonly theme = this.current.asReadonly();
  readonly isDark = computed(() => this.current() === 'dark');

  /**
   * Adopts the theme already on <html> — index.html sets it pre-paint from
   * storage/prefers-color-scheme, so this keeps the service in sync rather
   * than re-deriving it and causing a flash.
   */
  init(): void {
    if (!this.isBrowser) {
      return;
    }

    const attr = this.document.documentElement.dataset['theme'];
    const resolved: Theme = attr === 'light' || attr === 'dark' ? attr : 'dark';

    this.current.set(resolved);
    this.apply(resolved);
  }

  toggle(): void {
    this.set(this.current() === 'dark' ? 'light' : 'dark');
  }

  set(theme: Theme): void {
    this.current.set(theme);

    if (!this.isBrowser) {
      return;
    }

    this.apply(theme);

    try {
      this.document.defaultView?.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Private browsing / storage disabled — theme still applies for this session.
    }
  }

  private apply(theme: Theme): void {
    this.document.documentElement.dataset['theme'] = theme;
    this.document.documentElement.style.colorScheme = theme;
  }
}
