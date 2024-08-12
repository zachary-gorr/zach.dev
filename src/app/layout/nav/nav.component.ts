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

  theme = signal('dark');
  userScrolled = signal(false);

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
    console.log('Hiting Theme Button')
  }

}
