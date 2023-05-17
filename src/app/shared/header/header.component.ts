import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  clickHeaderOpotion(option: string) {
    debugger;
    let chosen;
    switch (option.toLowerCase()) {
      case 'about':
        chosen = document.getElementById('about');
        break;
      case 'work':
        chosen = document.getElementById('work');
        break;
    }
    chosen?.scrollIntoView();
  }
}
