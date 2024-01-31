import { Component } from "@angular/core";
import { SharedService } from "./shared.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  isDesktop = false;
  cookieMessage =
    "This website uses cookies to ensure you get best experience on this website";
  cookieLinkText = "Learn More";
  cookieDismiss = "Allow";
  constructor(private sharedService: SharedService) {
    let cc = window as any;
    cc.cookieconsent.initialise({
      palette: {
        popup: {
          background: "#164969",
          border: "10px 0 0 10px",
        },
        button: {
          background: "#ffe000",
          text: "#164969",
        },
      },
      theme: "classic",
      position: "bottom",
      type: "opt-out",
      content: {
        message:
          "This website uses cookies to ensure you get the best experience on our website.",
        dismiss: "Got it!",
        deny: "Refuse cookies",
        link: "Learn more",
        href: "https://cookiesandyou.com",
        policy: "Cookie Policy",
      },
    });

    this.sharedService.getDeviceDetail();
    window.addEventListener(
      "resize",
      () => {
        if (window.innerWidth > 700) this.sharedService.isDesktop.next(true);
        else {
          this.sharedService.isDesktop.next(false);
        }
      },
      true
    );
    this.sharedService.isDesktop.subscribe((data) => (this.isDesktop = data));
    let sec = document.addEventListener("scroll", () => {
      if (!this.isDesktop) {
        var winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
        var height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        var q = document.getElementById("scrollBar");
        if (q) q.style.width = scrolled + "%";
      } else {
        this.hovers();
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (
          st > lastScrollTop &&
          (document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50)
        ) {
          document.getElementById("header")?.classList.add("growHader");
        } else if (st < lastScrollTop && window.scrollY < 550) {
          document.getElementById("header")?.classList.remove("growHader");

          // upscroll code
        } // else was horizontal scroll
        lastScrollTop = st <= 0 ? 0 : st;
      }
    });
    var lastScrollTop = 0;
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
  title = "portfolioSushma";
}
