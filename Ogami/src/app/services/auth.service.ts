import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  domain = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  registerUser(user) {
    return this.http
      .post(this.domain + '/authentication/register', user)
      .map(res => res);
  }

  checkUsername(username) {
    return this.http
      .get(this.domain + '/authentication/checkUsername' + username)
      .map(res => res);
  }

  checkEmail(email) {
    return this.http
      .get(this.domain + '/authentication/checkEmail' + email)
      .map(res => res);
  }
}
