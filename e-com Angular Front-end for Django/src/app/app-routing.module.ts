import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { SelectAddrComponent } from './Components/select-addr/select-addr.component';
import { LoggedinComponent } from './Components/loggedin/loggedin.component';
import { LoginComponent } from './Components/login/login.component';
import { ShoppingComponent } from './Components/Shopping/shopping.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{path:'',component:ShoppingComponent},
{path:'login',component:LoginComponent},
{path:'logged',component:LoggedinComponent},
{path:'seladdr',component:SelectAddrComponent},
{path:'myorders',component:MyOrdersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
