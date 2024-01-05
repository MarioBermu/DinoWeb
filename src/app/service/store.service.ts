import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { lastValueFrom } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  //baseUrl = 'http://localhost:3000';
  baseUrl='https://api.escuelajs.co/api/v1/';
  constructor(private httpClient:HttpClient) { }

    getAllProducts(): Observable<Product[]> {
    const response =this.httpClient.get<Product[]>(`${this.baseUrl}products`);
    return response;
    }

}
