import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  isDesktop = false;

  constructor() {
    if (window.innerWidth > 500) this.isDesktop = true;
    let sec = document.addEventListener("scroll", () => {
      this.hovers();
      var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (
        st > lastScrollTop &&
        (document.body.scrollTop > 550 ||
          document.documentElement.scrollTop > 550)
      ) {
        document.getElementById("header")?.classList.add("growHader");
      } else if (st < lastScrollTop && window.scrollY < 550) {
        document.getElementById("header")?.classList.remove("growHader");

        // upscroll code
      } // else was horizontal scroll
      lastScrollTop = st <= 0 ? 0 : st;
    });
    var lastScrollTop = 0;

    console.log(sec);
  }
  hovers() {
    let sections = document.querySelectorAll("section");
    let headerOptions = document.querySelectorAll("ul li a");
    for (let i = 0; i < sections.length; i++) {
      let top = window.scrollY;
      let offset = sections[i].offsetTop - 150;
      let height = sections[i].offsetHeight;
      let id = sections[i].getAttribute("id");
      if (top >= offset && top < offset + height) {
        headerOptions.forEach((i) => {
          i.classList.remove("active");
        });
        document
          .querySelector('a[href="#' + id + '"]')
          ?.classList.add("active");
      }
    }
  }
  // section = 'intro';
  title = "portfolioSushma";
}
