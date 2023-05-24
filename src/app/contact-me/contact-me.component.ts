import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { SharedService } from "../shared.service";

@Component({
  selector: "app-contact-me",
  templateUrl: "./contact-me.component.html",
  styleUrls: ["./contact-me.component.scss"],
})
export class ContactMeComponent {
  constructor(private fb: FormBuilder, private sharedService: SharedService) {}
  contactForm = this.fb.group({
    name: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", [Validators.required]),
    address: new FormControl(""),
    message: new FormControl("", [Validators.required]),
  });
  onSubmit(FormData: any) {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.valid) {
      console.log(FormData);
      this.sharedService.PostMessage(FormData).subscribe(
        (response: any) => {
          location.href = "https://mailthis.to/confirm";
          console.log(response);
          this.contactForm.reset();
        },
        (error: any) => {
          console.warn(error.responseText);
          console.log({ error });
        }
      );
    }
  }
}
