import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  image: string;
  orientation: string;
}
@Component({
  selector: 'app-photo-modal',
  templateUrl: './photo-modal.component.html',
  styleUrls: ['./photo-modal.component.scss'],
})
export class PhotoModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    console.log(data);
  }
  ngAfterViewInit() {
    if (this.data.orientation == 'landscape')
      document.getElementById('galleryImage')?.classList.add('rotate');
  }
}
