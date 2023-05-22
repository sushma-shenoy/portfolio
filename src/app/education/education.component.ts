import { Component } from "@angular/core";
import { SharedService } from "../shared.service";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.scss"],
})
export class EducationComponent {
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
  };

  constructor(private sharedService: SharedService) {
    this.sharedService.isDesktop.subscribe((data) => (this.isDesktop = data));
  }

  slickInit(e: any) {
    console.log("slick initialized");
  }
  breakpoint(e: any) {
    console.log("breakpoint");
  }
  afterChange(e: any) {
    console.log("afterChange");
  }
  beforeChange(e: any) {
    console.log("beforeChange");
  }
  cardSelected = "card3";
  isDesktop = false;
  mouseEnter(event: any) {
    this.cardSelected = event;
    let cards = ["card1", "card2", "card3"];
    cards.forEach((data) => {
      if (event != data)
        document.getElementById(data)?.classList.add("blurCard");
      else {
        document.getElementById(data)?.classList.remove("blurCard");
      }
    });

    document.getElementById(event)?.classList.add();
    console.log(event);
  }
  mouseLeave() {
    document.getElementById("card1")?.classList.add("blurCard");
    document.getElementById("card2")?.classList.add("blurCard");
    document.getElementById("card3")?.classList.remove("blurCard");
  }
}
