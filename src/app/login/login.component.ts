import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  name = '';
  role = 'user';

  constructor(private router: Router) {}

  onLogin() {
    if (this.role === 'admin') {
      this.router.navigate(['/admin-dashboard']);
    } else {
      this.router.navigate(['/user-dashboard']);
    }
  }

  goToSignup() {
    this.router.navigate(['/signup']); // Navigate to the signup page
  }
}


   