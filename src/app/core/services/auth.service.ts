import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { ApiResponse, LoginPayload, RegisterPayload } from '../models/commonModel';
import { apiEndpoints, LocalStorage } from '../constants/constant';
import { map } from 'rxjs';
import { Route, Router } from '@angular/router';
import { Token } from '../../../../node_modules/acorn/dist/acorn.d';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = signal<boolean>(false)

  constructor( private _http: HttpClient , private router: Router) {
    if(this.getUserToken()){
      this.isLoggedIn.update(()=> true)
    }
   }


  Register(payload : RegisterPayload){
    return this._http.post<ApiResponse<any>>(`${apiEndpoints.Auth.Register}` , payload)


  }

  Login( payload : LoginPayload){
    return this._http.post<ApiResponse<any>>(`${apiEndpoints.Auth.Login}` , payload).pipe(
    map((response)=>{
      if(response.Status=='success' && response.Token){
        localStorage.setItem('Token' , response.Token)
        this.isLoggedIn.update(()=> true)

      }
      return response
    })
    )
  }

  getAllUser(){
    return this._http.get<ApiResponse<any>>(`${apiEndpoints.Auth.AllUsers}` )
  }


  logout(){
    localStorage.removeItem('Token')
    this.router.navigate(['/login'])
    this.isLoggedIn.update(()=> false)


  }

  getUserToken(){
    return localStorage.getItem('Token')
  }

}
