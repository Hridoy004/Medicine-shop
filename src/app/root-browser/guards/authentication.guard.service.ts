import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import {SessionService} from "../services/session.service";
import {Location} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  public constructor(private router: Router,
                     private sessionService: SessionService,
                     private location: Location) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let path = this.location.path();

    let token = this.sessionService.getToken();
    console.log('session token: ', token);
    if(token === null || token === undefined) {
      this.router.navigate(['/auth/login'], {queryParams: {redirect: path}});
      return false;
    }
    return true;
  }

}
