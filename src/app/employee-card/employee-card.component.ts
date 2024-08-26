import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent {
  @Input() employee: any;
  @Output() delete = new EventEmitter<string>();
}