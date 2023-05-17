import { Component } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export class CertificateComponent {
  Certificates = [
    'css.png',
    'html.png',
    'angular.png',
    'javascript.png',
    'freecode.png',
  ];
  onClick() {}
}
