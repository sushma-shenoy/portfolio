import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  cardSelected = 'card3';
  mouseEnter(event: any) {
    this.cardSelected = event;
    let cards = ['card1', 'card2', 'card3'];
    cards.forEach((data) => {
      if (event != data)
        document.getElementById(data)?.classList.add('blurCard');
      else {
        document.getElementById(data)?.classList.remove('blurCard');
      }
    });

    document.getElementById(event)?.classList.add();
    console.log(event);
  }
  mouseLeave() {
    document.getElementById('card1')?.classList.add('blurCard');
    document.getElementById('card2')?.classList.add('blurCard');
    document.getElementById('card3')?.classList.remove('blurCard');
  }
}
