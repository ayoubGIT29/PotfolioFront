import { Injectable } from '@angular/core';
import {environment} from "../environments/environement";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient,
              private router:Router) { }

  public Login(LoginForm:any): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/auth/login`,LoginForm);
  }

  public Register(RegisterForm:any): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/auth/register`,RegisterForm);
  }


  public SaveTokenLOGIN(Token:any,Role:any){
    localStorage.setItem("token", Token);
    localStorage.setItem("role", Role);
    this.router.navigateByUrl("/projects");
  }

  public SaveTokenREGISTER(Token:any){
    localStorage.setItem("token", Token);
    this.router.navigateByUrl("/login");
  }
}
