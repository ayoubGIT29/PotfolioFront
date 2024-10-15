import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements  OnInit{

  public LoginForm!:FormGroup;
  constructor(private fb:FormBuilder,
              private authService:AuthService,
  ) {
  }

  ngOnInit(): void {
    this.LoginForm= this.fb.group(
      {
        username:[""],
        password:[""]
      }
    )
  }


  Lgin(){
    if(this.LoginForm.valid){
      this.authService.Login(this.LoginForm.value).subscribe(
        {
          next:data=>{
            console.log(data)
            this.authService.SaveTokenLOGIN(data.token,data.role);

      }
        }
      )
    }
    else {alert("Invalid credentials")}
  }


}
