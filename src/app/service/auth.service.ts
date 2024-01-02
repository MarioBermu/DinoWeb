import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserI } from '../models/user';
import { JwtResponseI } from '../models/jwt-response';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable()
export class AuthService {
  AUTH_SERVER: string = 'http://localhost:3000';
  authSubject = new BehaviorSubject(false);
  private token: string;
  constructor(private httpClient: HttpClient) {
    this.token = '';
  }

  register(user: UserI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/register`, user).pipe(tap(
      (res: JwtResponseI) => {
        if (res) {
          // guardar token
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        }
      }
    ));
  }

  login(user: UserI): Observable<JwtResponseI> {
    //guardamos el nombre del usuario logueado
    this.nombre.next(user.name);
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/login`, user).pipe(tap(
      (res: JwtResponseI) => {
        if (res) {
          // guardar token
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        }
      }
    ),
    catchError((error: any) => {
      console.error('Error en la solicitud:', error);
      return throwError('Error en la solicitud:');
    })
    );

  }

  logout(): void {
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
    this.nombre.next('');
    //si no hay nombre que salga inicio sesion

  }

  private saveToken(token: string, expiresIn: string): void {
    //guardar el valor del token en local storage
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN") || '';
    }
    return this.token;
  }

  //guardamos el nombre del usuario logueado
  private nombre = new BehaviorSubject<string>('');
  loggedInUsers = this.nombre.asObservable();
  setLoggedInUser(username: string): void {
    this.nombre.next(username);
  }
}
