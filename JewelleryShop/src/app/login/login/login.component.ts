import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {Router} from "@angular/router";
import { DataServiceService } from "../services/data-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginservice:LoginService;
  message:string;
  constructor(private _loginservice:LoginService,private router : Router,private data: DataServiceService) { 
    this.loginservice=_loginservice;
  }
  public user : string;
  public password : string;
  

  getLogin(){
    this.loginservice.getLogin(this.user,this.password).subscribe(data=>{
      console.log(data.status);
      if(data.status == 'success'){
        this.data.changeMessage(this.user);
        this.router.navigate(['ownerDashboard']);
      }
    });    
 }
 ngOnInit() {
  this.data.currentMessage.subscribe(message => this.message = message)
}

}
