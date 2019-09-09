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
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  domain = 'http://localhost:8080';
  authToken;
  user;

  constructor(private http: HttpClient) {}

  registerUser(user) {
    return this.http
      .post(this.domain + '/authentication/register', user)
      .pipe(map(res => res));
  }

  loginUser(user) {
    return this.http
      .post(this.domain + '/authentication/login', user)
      .pipe(map(res => res));
  }

  storageUserData(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    this.authToken = token;
    this.user = user;
  }
}
