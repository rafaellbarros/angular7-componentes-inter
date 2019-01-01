import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  name = '';
  salary = 0;
  bonus = 0;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  addEmployee(event) {
    console.warn(event);
    const bonus = this.salary >= 1000 ? 0 : this.bonus;
    this.employeeService.employees.push({name: this.name, salary: this.salary, bonus: bonus});
    console.log(this.employeeService.employees);
  }

}
