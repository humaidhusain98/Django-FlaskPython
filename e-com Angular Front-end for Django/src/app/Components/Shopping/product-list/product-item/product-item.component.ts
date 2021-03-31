import { MessengerService } from './../../../../Services/messenger.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem:Product;
  constructor(private userserv:UserService,private msger:MessengerService) { }

  ngOnInit(): void {
  }

  addtoCart(id:number){
    this.userserv.addProductToCart(id).subscribe(()=>{
      this.msger.setCartRefresh();

    });
    
  }

}
