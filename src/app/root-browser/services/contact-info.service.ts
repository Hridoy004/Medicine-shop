import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class contactInfoService {
  constructor(private http :  HttpClient) {
  }

  apiUrl = 'http://localhost:3000/contactInfo';

  getAllData():Observable<any>
  {
    return this. http.get(`${this.apiUrl}`);
  }
}
