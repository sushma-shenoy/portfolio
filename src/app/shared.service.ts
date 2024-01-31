import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  api = "https://mailthis.to/sushma.s2223";
  isDesktop = new BehaviorSubject(true);
  constructor(private http: HttpClient) {}
  getDeviceDetail() {
    if (window.innerWidth < 700) this.isDesktop.next(false);
  }
  PostMessage(input: any) {
    return this.http
      .post(this.api, input, {
        responseType: "text",
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
