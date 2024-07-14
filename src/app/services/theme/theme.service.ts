import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  theme = new BehaviorSubject('dark');
  isDarkTheme = signal(true);

  constructor() { }

  updateTheme() {
    this.isDarkTheme() ? this.isDarkTheme.set(false) : this.isDarkTheme.set(true);
    this.isDarkTheme() ? this.theme.next('dark') : this.theme.next('light');
    
    document.body.setAttribute(
      'data-theme',
      this.isDarkTheme() ? 'dark' : 'light'
    );
  }
}
