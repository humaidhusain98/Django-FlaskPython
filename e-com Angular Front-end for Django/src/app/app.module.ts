
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/Shared/nav/nav.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { ShoppingComponent } from './Components/Shopping/shopping.component';
import { ProductListComponent } from './Components/Shopping/product-list/product-list.component';
import { FiltersComponent } from './Components/Shopping/filters/filters.component';
import { CartComponent } from './Components/Shopping/cart/cart.component';
import { ProductItemComponent } from './Components/Shopping/product-list/product-item/product-item.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { LoggedinComponent } from './Components/loggedin/loggedin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectAddrComponent } from './Components/select-addr/select-addr.component';
import { OrderplacedComponent } from './Components/orderplaced/orderplaced.component';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ShoppingComponent,
    ProductListComponent,
    FiltersComponent,
    CartComponent,
    ProductItemComponent,
    LoginComponent,
    LoggedinComponent,
    SelectAddrComponent,
    OrderplacedComponent,
    MyOrdersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
