import { Component, OnInit } from "@angular/core";
import { SharedService } from "src/app/shared.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  isDesktop: boolean = true;
  constructor(private sharedService: SharedService) {}
  ngOnInit() {
    this.sharedService.isDesktop.subscribe((data) => (this.isDesktop = data));
  }
  clickHeaderOpotion(option: string) {
    debugger;
    let chosen;
    switch (option.toLowerCase()) {
      case "about":
        chosen = document.getElementById("about");
        break;
      case "work":
        chosen = document.getElementById("work");
        break;
    }
    chosen?.scrollIntoView();
  }
}
