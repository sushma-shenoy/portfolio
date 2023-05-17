import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
  Projects = [
    {
      role: 'Hybrid Application Developer',
      name: 'Axis Mutual Fund',
      year: 'Aug 2020- Oct 2022',
      tag: 'Worked on a hybrid app (Android, iOS and web) for Axis mutual fund for investors to manage the investments using Angular, Ionic',
    },
    {
      role: 'Hybrid Application Developer',
      name: 'L&T Mutual Fund',
      year: 'Jun 2020- Aug 2020',
      tag: 'Developed a distributor app for L&T mutual fund which manages the clients investments  ',
    },

    {
      role: 'Hybrid Application Developer',
      name: 'L&T Mutual Fund',
      year: 'Jun 2020- Aug 2020',
      tag: 'Developed a distributor app for L&T mutual fund which manages the clients investments  ',
    },
    {
      role: 'Hybrid Application Developer',
      name: 'L&T Mutual Fund',
      year: 'Jun 2020- Aug 2020',
      tag: 'Developed a distributor app for L&T mutual fund which manages the clients investments  ',
    },
  ];
}
