import { Address } from './../../Models/address';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.css']
})
export class LoggedinComponent implements OnInit {
  addresses:Address[];
  addr=new Address();
  constructor(private router:Router,private userserv:UserService) { }

  ngOnInit(): void {
    this.loadaddress();
  }

  loadaddress(){
    this.userserv.getaddresses().subscribe((data:Address[])=>{
      console.log(data);
      this.addresses=data;
    });
  }

  addAddress(){
    this.userserv.addAddress(this.addr).subscribe(()=>{
      console.log(this.addr);
      this.loadaddress();
    });
  }

  removeUserLink(addre:Address){
    this.userserv.removAddressLink(addre).subscribe(()=>{
      this.loadaddress();
    });
    
  }

  
 
}
