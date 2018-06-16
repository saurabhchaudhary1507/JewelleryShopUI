import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {BehaviorSubject} from 'rxjs';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url:string;
  
  constructor(private httpClient: HttpClient) {
    this.url  = 'http://192.168.31.104:8080/login'
   }

  getLogin(user:string,password:string):Observable<any> {
    console.log('service called'+user);
    let credentials= { userName:user, password:password };
    return this.httpClient.post<any>(this.url,credentials);
  }
}
