import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  public RegisterForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.RegisterForm = this.fb.group(
      {
        username: [""],
        email: [""],
        password: [""]
      }
    );
  }

  Register() {
    if (this.RegisterForm.valid) {
      this.authService.Register(this.RegisterForm.value).subscribe({
        next: data => {
          console.log("Registration successful", data);
          this.authService.SaveTokenREGISTER(data.token); // Save token after registration
        },
        error: err => {
          console.error("Registration failed", err);
          alert("Registration failed: " + err.error.message);
        }
      });
    } else {
      alert("Please fill in all the fields");
    }
  }
}
