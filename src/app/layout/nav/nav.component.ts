import { Component, OnInit, signal } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {

  theme = signal('dark');

  constructor(public themeService: ThemeService) {}

  ngOnInit(){
    this.themeService.theme.subscribe(theme => this.theme.set(theme));
  }

  updateTheme() {
    this.themeService.updateTheme();
    console.log('Hiting Theme Button')
  }

}
