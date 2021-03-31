import { MessengerService } from './messenger.service';
import { Product } from './../Models/product';
import { baseUrl } from './../config/api';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private _http:HttpClient) { }

  getProducts():Observable<Product[]>{

      return this._http.get<Product[]>(baseUrl);
  }





  getSearchProducts(keyword:String):Observable<Product[]>{
      return this._http.get<Product[]>(baseUrl+'/search/'+keyword);
  }
}
