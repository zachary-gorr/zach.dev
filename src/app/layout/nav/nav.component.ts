import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {

  theme = 'dark';

  constructor(public themeService: ThemeService) {}

  ngOnInit(){
    this.themeService.theme.subscribe(theme => {
      this.updateTheme(theme);
    })
  }

  updateTheme(theme: any) {
    this.theme = theme;
  }

}
