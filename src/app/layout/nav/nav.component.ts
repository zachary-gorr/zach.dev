import { Component, HostListener, OnInit, signal } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {

  theme = signal('light');
  userScrolled = signal(false);
  backgroundOrbs = [
    { index: 0, color: 'purple', xPos: '', yPos: '', width: '', height: '' },
    { index: 1, color: 'green', xPos: '', yPos: '', width: '', height: '' },
  ];

  constructor(public themeService: ThemeService) {}

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    if (window.scrollY > 100) {
     this.userScrolled.set(true);
    }
    else {
     this.userScrolled.set(false);
    }
   }

  ngOnInit(){
    this.themeService.theme.subscribe(theme => this.theme.set(theme));
  }

  updateTheme() {
    this.themeService.updateTheme();
  }

}
