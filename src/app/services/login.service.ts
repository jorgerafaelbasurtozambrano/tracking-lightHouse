import { Injectable } from '@angular/core';
import { server } from "../../environments/environment";
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { EMPTY } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  private _header = new HttpHeaders().set('Content-Type', 'application/raw');
  login_(_email:any,_password:any){
    return new Promise((resolve, reject) => {
      this.http.post(server+"/users/login",{email:_email,password:_password},{withCredentials:false})
                .subscribe(res=>{
                  resolve(res);
                },(err)=>{
                  return EMPTY;
                });
    });
  }
}
