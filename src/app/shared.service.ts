import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  isDesktop = new BehaviorSubject(true);
  constructor() {}
  getDeviceDetail() {
    if (window.innerWidth < 550) this.isDesktop.next(false);
  }
}
