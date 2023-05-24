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
import { ContactMeComponent } from "./contact-me/contact-me.component";
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldControl,
  MatFormFieldModule,
} from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    AboutComponent,
    TimelineComponent,
    EducationComponent,
    HobbiesComponent,
    CertificateComponent,
    ContactMeComponent,
    ContactMeComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [
    HttpClient,
    MatDialog,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { floatLabel: "auto" },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
