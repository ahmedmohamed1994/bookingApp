import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserType } from '../interfaces/user-type';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  protected isPublicUser = new BehaviorSubject<boolean>(null);

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  get isPublicUser$() {
    return this.isPublicUser.pipe(
      filter(data => {
        return data !== null;
      })
    );
  }

  getUserType(): Observable<UserType> {
    return this.httpClient.get<UserType>(environment.apiUrl + '/bins/bhndt').pipe(
      tap(userType => {
        if (userType.access_token1) {
          this.isPublicUser.next(true);
        } else {
          this.isPublicUser.next(false);
        }
      })
    );
  }
}
