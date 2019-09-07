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
import { first, map } from 'rxjs/operators';
import { StartupService } from '../services/startup.service';

@Injectable({
  providedIn: 'root'
})
export class PublicUserGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    protected startupService: StartupService,
    protected router: Router,
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isPublicUser();
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isPublicUser();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.isPublicUser();
  }

  isPublicUser(): Observable<boolean> | boolean {
    return this.startupService.isPublicUser$.pipe(
      map(data => {
        if (!data) {
          this.router.navigate(['/auth/login']);
          return false;
        }
        return true;
      }),
      first()
    );
  }
}
