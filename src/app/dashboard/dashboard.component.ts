import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  employees = [];
  department = 'user'; // Update based on logged-in user department
  searchQuery = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<[]>('http://localhost:3000/employees')
      .subscribe(data => {
        this.employees = data.filter((employee:any) => employee.department === this.department);
      });
  }

  filteredEmployees() {
    return this.employees.filter((employee:any) => employee.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }
}
