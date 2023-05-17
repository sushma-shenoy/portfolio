import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PhotoModalComponent } from './photo-modal/photo-modal.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    PhotoModalComponent,
  ],
  imports: [CommonModule, MatDialogModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    PhotoModalComponent,
  ],
  providers: [MatDialog],
  entryComponents: [PhotoModalComponent],
})
export class SharedModule {}
