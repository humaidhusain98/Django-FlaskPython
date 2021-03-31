import { MessengerService } from './../../../Services/messenger.service';
import { ProductServiceService } from './../../../Services/product-service.service';
import { Component, OnInit, ɵConsole } from '@angular/core';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:Product[]=[];
  constructor(
    private productService:ProductServiceService,
    private msgserv:MessengerService
  ) { }

  ngOnInit(): void {
    this.loadProducts();
    this.doSearch();
  }

  loadProducts(){
    this.productService.getProducts().subscribe((products:Product[])=>{
      
      this.productList=products;
    })
  }

  doSearch(){
    this.msgserv.getMsg().subscribe((search:String)=>{
      if(search=="" || search==undefined)
        this.loadProducts();
      else
        this.loadSearchProducts(search);
    })

  }



  loadSearchProducts(search:String){
    this.productService.getSearchProducts(search).subscribe((products)=>{
      
      this.productList=products;
    })
    
  }

}
