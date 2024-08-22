import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  employees = [];
  searchQuery = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<[]>('http://localhost:3000/employees')
      .subscribe(data => {
        this.employees = data;
      });
  }

  onDelete(employeeId: number) {
    this.http.delete(`http://localhost:3000/employees/${employeeId}`)
      .subscribe(() => {
        this.employees = this.employees.filter((employee:any) => employee.id !== employeeId);
      });
  }

  filteredEmployees() {
    return this.employees.filter((employee:any) => employee.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }
}


