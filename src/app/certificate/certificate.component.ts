import { Component } from "@angular/core";
import { PhotoModalComponent } from "../shared/photo-modal/photo-modal.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-certificate",
  templateUrl: "./certificate.component.html",
  styleUrls: ["./certificate.component.scss"],
})
export class CertificateComponent {
  constructor(private mat: MatDialog) {}

  Certificates = [
    "assets/images/certificate/css.png",
    "assets/images/certificate/html.png",
    "assets/images/certificate/angular.png",
    "assets/images/certificate/javascript.png",
    "assets/images/certificate/freecode.png",
  ];
  viewImage(image: any) {
    let mat = this.mat.open(PhotoModalComponent, {
      data: { image },
    });
  }
  onClick() {}
}
