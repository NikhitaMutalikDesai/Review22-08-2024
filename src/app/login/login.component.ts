import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  name = '';
  role = '';

  constructor( private employeeService: EmployeeServiceService,  private router: Router) {}


  login(){

    let obj ={
      "name":this.name,
       "role": this.role
    }
    console.log(obj);
    


    this.employeeService.login(obj).subscribe({
      next:(res:any)=>{
        console.log(res[0]);
        
        localStorage.setItem("role", res[0].role)
        localStorage.setItem("dept", res[0].department)

        
      }
    });

    

  }
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


   