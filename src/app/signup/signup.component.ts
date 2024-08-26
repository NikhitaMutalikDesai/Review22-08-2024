import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../services/employee-service.service';

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

  constructor(private route:Router, private employee:EmployeeServiceService) {}


  register(){

  const obj=  {
      name: this.name,
      mob: this.mob,
      department: this.department,
      role: this.role
    }

    this.employee.register(obj).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.route.navigate(['/login'])
        
      }
    });



  }

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




