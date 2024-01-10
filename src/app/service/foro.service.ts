import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MensajeI } from '../models/mensaje';
import { JwtResponseI } from '../models/jwt-response';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ForoService {
  AUTH_SERVER: string = 'http://localhost:3000/api';
  authSubject = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) {

  }
crearMensaje(mensaje: MensajeI): Observable<JwtResponseI> {

  return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/foro`, mensaje);

    }




}
