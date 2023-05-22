import { Component } from "@angular/core";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.scss"],
})
export class TimelineComponent {
  Projects = [
    {
      role: "Hybrid Application Developer",
      name: "Axis Mutual Fund",
      year: "Sep 2021- Oct 2022",
      tag: "Worked on official hybrid(iOS, android, Web) application of Axis Mutual Fund(India) for investors. Worked on Angular version 8, ionic version 4. This project had won Best Project Award in the qaurterly meerting",
    },
    {
      role: "Hybrid Application Developer",
      name: "L&T Mutual Fund",
      year: "Apr 2020- Sep 2021",
      tag: "Developed a distributor app for L&T mutual fund which manages the clients investments. This includes account statement view, Transaction History view, Folio deatils   ",
    },

    {
      role: "Angular Developer",
      name: "Volonte - Resource Management Application",
      year: "Jan 2020- Mar 2020",
      tag: "Online resource management web application which helps in career change, upskilling or reskilling workforce. This is digital solution for gaining higher profitability by talent ",
    },
    {
      role: "ReactJS Developer",
      name: "Noon - e-commerce platform",
      year: "Oct 2019- Jan 2020",
      tag: "This is an online platform offering services and digital marketplace built using ReactJS. I Worked on internationalization of the web application, Loyalty program which focused on offers, deals for the purchases",
    },
    {
      role: "VanillaJS Developer",
      name: "NoonPay",
      year: "Jul 2019- Sep 2019",
      tag: "This is an online payment platform built using VanillaJS where I worked on building UI components for mobile and desktop versions",
    },
  ];
}
