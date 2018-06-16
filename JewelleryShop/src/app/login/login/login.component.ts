import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginservice:LoginService;
  constructor(private _loginservice:LoginService) { 
    this.loginservice=_loginservice;
  }
  public user : string;
  public password : string;
  

  getLogin(){
    this.loginservice.getLogin(this.user,this.password).subscribe(data=>{
      console.log(data.status);
    });    
 }
  ngOnInit() {
  }

}
