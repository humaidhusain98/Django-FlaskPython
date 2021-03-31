import { Address } from './../Models/address';
import { Router } from '@angular/router';


import { baseUrl } from './../config/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class  UserService {

  
  

  constructor(private _http:HttpClient,private router:Router) { }

  public cart( user:string, pass:string)
  {
    return this._http.post("http://localhost:8000/api/login/",{"username":user,"password":pass})

  }

  public getCart()
  {
    const token=localStorage.getItem("token");
    const headers=new HttpHeaders({Authorization: token});
    return this._http.get("http://localhost:8000/user/cart/",{headers});

  }


  public addProductToCart(productid:number){
    const token=localStorage.getItem("token");
    const headers=new HttpHeaders({Authorization: token});
    return this._http.get("http://localhost:8000/user/cart/add/"+productid,{headers});
  }

  public removeProductFromCart(productid:number){
    const token=localStorage.getItem("token");
    const headers=new HttpHeaders({Authorization: token});
    return this._http.get("http://localhost:8000/user/cart/remove/"+productid,{headers});
  }

  public getcartTotal(){
    const token=localStorage.getItem("token");
    const headers=new HttpHeaders({Authorization: token});
    return this._http.get("http://localhost:8000/user/cart/total",{headers});
  }

  public getProductById(id:number){
    const token=localStorage.getItem("token");
    const headers=new HttpHeaders({Authorization: token});
    return this._http.get("http://localhost:8000/user/cart/"+id,{headers});
  }


  public getaddresses(){
    const token=localStorage.getItem("token");
    const headers=new HttpHeaders({Authorization: token});
    return this._http.get("http://localhost:8000/user/address",{headers});
  }

  public addAddress(address:Address){
    const token=localStorage.getItem("token");
    const headers=new HttpHeaders({Authorization: token});
    return this._http.post("http://localhost:8000/user/add/address",address,{headers});
  }
  
  public processCODorder(addressid:number){
    const token=localStorage.getItem("token");
    const headers=new HttpHeaders({Authorization: token});
    return this._http.get("http://localhost:8000/user/address/"+addressid,{headers});
  }

  public getOrders(){
    const token=localStorage.getItem("token");
    const headers=new HttpHeaders({Authorization: token});
    return this._http.get("http://localhost:8000/user/getAllOrders",{headers});

  }

  public removAddressLink(addre:Address){
    const token=localStorage.getItem("token");
    const headers=new HttpHeaders({Authorization: token});
    return this._http.post("http://localhost:8000/user/deleteaddress",addre,{headers})
  }


 






  public logout(){
    const token=localStorage.getItem("token");
    const headers=new HttpHeaders({Authorization: token});
    const k=token.split(" ")
    return this._http.post("http://localhost:8000/api/logout/",{"token":k[1]},{headers})
    
    
  }

  public register(user:User){
    return this._http.post(baseUrl+'/api/register/',user);
  }



}
