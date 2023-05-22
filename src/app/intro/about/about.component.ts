import { Component } from "@angular/core";
import { SharedService } from "src/app/shared.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent {
  isDesktop: boolean = true;
  constructor(private sharedService: SharedService) {
    this.sharedService.isDesktop.subscribe((data) => (this.isDesktop = data));
  }
}
