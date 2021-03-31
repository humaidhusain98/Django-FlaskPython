import { Router } from '@angular/router';
import { MessengerService } from './../../../Services/messenger.service';
import { CartItem } from './../../../Models/cart-item';
import { UserService } from './../../../Services/user.service';
import { User } from './../../../Models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  username:string;
  password:string;
  cartItems:CartItem[];
  val:boolean=true;
  status=false;
  usern:String;
  cartTotal:number;
  error:String="";
  constructor(private userServ:UserService,private msger:MessengerService,private route:Router) {
    this.cartItems=[];
   }

  ngOnInit(): void {
    this.changestat();

    this.msger.getCartRefresh().subscribe(()=>{
      this.getCart();
      this.getTotal();
      console.log("Getting ngOnit setCartRefresh block")
    });


    if(this.status==true){

    this.getCart();
    this.getTotal();
    console.log("Getting ngOnit STatus block")
    }
  }

  doRefresh():void{
    

  }

  getCart(){
    
    this.userServ.getCart().subscribe((data:CartItem[])=>{
      this.cartItems=data;
      
      this.val=false;

    })
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

   getTotal(){
     this.userServ.getcartTotal().subscribe(data=>{
      this.cartTotal=data['total'];

     })
   }

   removeProd(id:number){
     this.userServ.removeProductFromCart(id).subscribe(()=>{
      this.getCart();
      this.getTotal();
      console.log("Removing Product Block")
     });
   }

   proceed(){
     this.route.navigate(['/seladdr']);
   }
   

}
