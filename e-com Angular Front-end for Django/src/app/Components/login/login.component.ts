import { MessengerService } from './../../Services/messenger.service';
import { User } from './../../Models/user';
import { UserService } from './../../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  user:User=new User();

  constructor(private service:UserService,private router:Router,private msgServ:MessengerService) { 
    
  }

  ngOnInit(): void {
  }

  login()
  {
    this.service.cart(this.username,this.password).subscribe(data=>
    {
      console.log(data)
      const token="Token "+data['token'];
      localStorage.setItem("token",token);
      this.msgServ.setrefresh();
      this.router.navigate(['/logged']);
      


    });

  }



  registerUser(){
    this.service.register(this.user).subscribe(data=>{
      console.log(data);
      const token="Token "+data['token'];
      localStorage.setItem("token",token);

    });

  

  }

}
