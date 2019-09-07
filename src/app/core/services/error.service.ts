import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() {
  }

  handleError(error: HttpErrorResponse) {
    console.log(error);
    // TODO
  }
}
