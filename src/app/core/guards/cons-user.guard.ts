import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { StartupService } from '../services/startup.service';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsUserGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    protected startupService: StartupService,
    protected router: Router,
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isConsUser();
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isConsUser();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.isConsUser();
  }

  isConsUser(): Observable<boolean> | boolean {
    return this.startupService.isPublicUser$.pipe(
      map(data => {
        if (data) {
          this.router.navigate(['/']);
          return false;
        }
        return true;
      }),
      first()
    );
  }

}
