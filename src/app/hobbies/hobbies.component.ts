import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PhotoModalComponent } from '../shared/photo-modal/photo-modal.component';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
})
export class HobbiesComponent implements OnInit {
  constructor(private mat: MatDialog) {}
  images: string[] = [];
  ngOnInit() {
    for (let i = 1; i < 20; i++) {
      this.images.push(`./../../assets/images/sketches/${i}.jpg`);
    }
  }
  viewImage(image: any, index: any) {
    let mat = this.mat.open(PhotoModalComponent, {
      data: { image, orientation: index != 9 ? 'potrait' : 'landscape' },
    });
  }
}
