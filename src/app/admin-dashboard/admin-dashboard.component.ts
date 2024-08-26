import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  employees = [];
  searchQuery = '';

  constructor(private http: HttpClient, private employee: EmployeeServiceService) {}

  ngOnInit(): void {
    this.employee.getData().subscribe({
      next:(res:any)=>{
        this.employees=res;

        console.log(this.employees);
        
      }
     });
  }

  onDelete(employeeId: string) {
    console.log("called");
    
    this.http.delete(`http://localhost:3000/employee/${employeeId}`)
      .subscribe(() => {
        this.employees = this.employees.filter((employee:any) => employee.id !== employeeId);
      });
  }

  filteredEmployees() {
    return this.employees.filter((employee:any) => employee.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }
}


