import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  employees = [];
  searchQuery = '';
  userDepartment = 'HR'; // This should be dynamically set based on the logged-in user

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<[]>('http://localhost:3000/employees')
      .subscribe(data => {
        this.employees = data.filter((employee:any)=> employee.department === this.userDepartment);
      });
  }

  filteredEmployees() {
    return this.employees.filter((employee:any) => employee.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }
}


