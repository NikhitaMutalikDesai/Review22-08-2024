import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  employees = [];
  department = 'user'; // Update based on logged-in user department
  searchQuery = '';

  constructor(private http: HttpClient, private employee:EmployeeServiceService) {}

  ngOnInit(): void {
     this.employee.getData().subscribe({
      next:(res:any)=>{
        this.employee=res;
      }
     });
  }

  filteredEmployees() {
    return this.employees.filter((employee:any) => employee.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }
}
