import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SessionService} from "./session.service";


@Injectable({
  providedIn: "root"
})

export class BackendService {

  baseUrl = 'http://localhost:3000';


  constructor(private httpClient: HttpClient,
              private sessionService: SessionService) {

  }


  register(payload: any) {
    let registrationUrl = `${this.baseUrl}/register`;
    return this.httpClient.post(registrationUrl, payload);
  }

  login(payload: any) {
    let registrationUrl = `${this.baseUrl}/login`;
    return this.httpClient.post(registrationUrl, payload);
  }

  GetLoggedInUser() {
    let headers = new HttpHeaders();
    headers = headers.append('Authentication', this.sessionService.getToken());
    let userDetailsUrl = `${this.baseUrl}/uam/GetLoggedInUser`;
    return this.httpClient.get(userDetailsUrl, {headers: headers});
  }

  check(payload: any) {
    let userDetailsUrl = `${this.baseUrl}/check`;
    return this.httpClient.post(userDetailsUrl, payload);
  }

  admin(payload: any) {
    let adminsUrl = `${this.baseUrl}/admin`;
    return this.httpClient.post(adminsUrl, payload);
  }

  contact(payload: any) {
    let contactsUrl = `${this.baseUrl}/contact`;
    return this.httpClient.post(contactsUrl, payload);
  }
}
