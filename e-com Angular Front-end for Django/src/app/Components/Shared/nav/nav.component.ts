import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { MessengerService } from './../../../Services/messenger.service';
import { ProductServiceService } from './../../../Services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  search:String;
  status=false;
  usern:String;
  constructor(private msgser:MessengerService,private router:Router,private userServ:UserService) { this.search="";}

  ngOnInit(): void {
    this.changestat();
    this.msgser.refreshNeed().subscribe(()=>{
    this.ngOnInit();
  });
  }

  searchProduct(){
    
    this.msgser.sendMsg(this.search);

   }

   changestat(){
    
    var log=localStorage.getItem("token")
    if(log==null)
      this.status=false;
    else
      {this.status=true;
        this.usern="User";
      }
   }

   tologin(){
     if(!this.status){
      this.router.navigate(["/login"]);}
      else{
        this.router.navigate(["/logged"]);
      }

   }

   gotohome(){
    
     this.router.navigate(["/"]);
    
   }

   signout(){
     
     this.userServ.logout().subscribe(data=>{
     console.log(data)
     localStorage.removeItem("token");
     this.router.navigate(["/login"]);
     this.ngOnInit();


     });
    
     
   }


   gotoMyOrders(){
     this.router.navigate(["myorders"])
   }




}
