import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  employees = [];
  
  searchQuery = '';
  userDepartment = 'HR';
  
 
   // This should be dynamically set based on the logged-in user

  constructor(private http: HttpClient, private employee:EmployeeServiceService) {}

  ngOnInit(): void {

   
    this.employee.getData().subscribe({
      next:(res:any)=>{
        this.employees=res;
        let items=   localStorage.getItem('dept');

        console.log(items);
        this.employees=this.employees.filter((item:any)=>item.role=="user" && item.department==items);
        console.log(this.employees);
        
      }
     });
  }

  filteredEmployees() {
    return  this.employees.filter((employee:any) => employee.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
   
  }
}


