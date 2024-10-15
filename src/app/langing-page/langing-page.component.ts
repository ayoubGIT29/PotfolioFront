import { Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-langing-page',
  templateUrl: './langing-page.component.html',
  styleUrl: './langing-page.component.css'
})
export class LangingPageComponent {
  constructor(private router: Router) { }

  // Call this method to redirect to the login route
  redirectToLogin() {
    this.router.navigate(['/login']);
  }

}
