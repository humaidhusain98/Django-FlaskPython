import { Injectable } from '@angular/core';
import {Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();

  


  constructor() { }

  private _refreshNeeded$=new Subject<void>();

  private _cartRefresh$=new Subject<void>();

   refreshNeed(){
    return this._refreshNeeded$.asObservable();
  }

  setrefresh(){
    this._refreshNeeded$.next();
  }

  sendMsg(search:String){
    this.subject.next(search);//Triggering an event
  }

  getMsg(){
    return this.subject.asObservable();
  } 

  setCartRefresh(){
    this._cartRefresh$.next();
  }

  getCartRefresh(){
    return this._cartRefresh$.asObservable();
  }
}
