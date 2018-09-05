import { Component, OnInit } from '@angular/core';
import employees from '../employees';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  name = '';
  salary = 0;
  bonus = 0;

  employees = employees;

  constructor() { }

  ngOnInit() {
  }

  addEmployee(event) {
    console.warn(event);
    const bonus = this.salary >= 1000 ? 0 : this.bonus;
    this.employees.push({name: this.name, salary: this.salary, bonus: bonus});
    console.log(this.employees);
  }

}
