import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  name: string = '';
  
  mob: string = '';
  department: string = '';
  role: string = 'user';

  constructor(private route:Router) {}

  onSignup() {
    // Signup logic here (e.g., storing user data via a service)
    console.log('User signed up:', {
      name: this.name,
      mob: this.mob,
      department: this.department,
      role: this.role
    });
  }
  // redirectToLogin(){
  //   this.route.navigate(['/login'])
  // }
  
 }




