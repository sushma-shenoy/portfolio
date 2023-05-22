import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IntroComponent } from "./intro/intro.component";
import { SharedModule } from "./shared/shared.module";
import { AboutComponent } from "./intro/about/about.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { EducationComponent } from "./education/education.component";
import { HobbiesComponent } from "./hobbies/hobbies.component";
import { CertificateComponent } from "./certificate/certificate.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialog } from "@angular/material/dialog";
import { SlickCarouselModule } from "ngx-slick-carousel";

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    AboutComponent,
    TimelineComponent,
    EducationComponent,
    HobbiesComponent,
    CertificateComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
  ],
  providers: [MatDialog],
  bootstrap: [AppComponent],
})
export class AppModule {}
