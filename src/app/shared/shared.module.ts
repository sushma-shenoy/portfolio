import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { PhotoModalComponent } from "./photo-modal/photo-modal.component";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [HeaderComponent, SideMenuComponent, PhotoModalComponent],
  imports: [CommonModule, MatDialogModule],
  exports: [HeaderComponent, SideMenuComponent, PhotoModalComponent],
  providers: [MatDialog],
  entryComponents: [PhotoModalComponent],
})
export class SharedModule {}
