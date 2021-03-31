import { OrderItem } from './../../Models/order-item';
import { CartItem } from './../../Models/cart-item';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/Models/address';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-select-addr',
  templateUrl: './select-addr.component.html',
  styleUrls: ['./select-addr.component.css']
})
export class SelectAddrComponent implements OnInit {
  addresses:Address[];
  addr=new Address();
  cartitems:CartItem[];
  cartTotal:number;
  addressid:number=-999;
  error:String="";
  Orderaddress:Address;
  changetoOrderPlaced=false;
  Order:OrderItem;
  constructor(private router:Router,private userserv:UserService) { }

  ngOnInit(): void {
    this.loadaddress();
    this.getCart();
    this.getCartTotal();
  }

  loadaddress(){
    this.userserv.getaddresses().subscribe((data:Address[])=>{
      this.addresses=data;
    });
  }

  addAddress(){
    this.userserv.addAddress(this.addr).subscribe(()=>{
      console.log(this.addr);
      this.loadaddress();
    });
  }

  selectAddr(addrid:number,ad:Address){
    this.addressid=addrid;
    this.Orderaddress=ad;
  }

  getCart(){
    this.userserv.getCart().subscribe((cartit:CartItem[])=>{
      this.cartitems=cartit;
    })
  }

  getCartTotal(){
    this.userserv.getcartTotal().subscribe(data=>{
      this.cartTotal=data['total'];
      if(this.cartTotal==0)
      this.router.navigate([""]);
    })
  }

  placeOrder(){
    if(this.addressid==-999){
      this.error="Please select an address";
    }
    else{
      this.userserv.processCODorder(this.addressid).subscribe((data:OrderItem)=>{
        this.Order=data;
        this.changetoOrderPlaced=true;
        
      })
    }
  }

  
 
}
