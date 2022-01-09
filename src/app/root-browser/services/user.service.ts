import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class userService {
  constructor(private http :  HttpClient) {
  }

  apiUrl = 'http://localhost:3000/users';

  getAllData():Observable<any>
  {
    return this. http.get(`${this.apiUrl}`);
  }
}
