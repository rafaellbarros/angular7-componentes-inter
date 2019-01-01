import { Component, OnInit, ElementRef } from '@angular/core';
import { Employee, EmployeeService } from './../employee.service';

declare const $;

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent implements OnInit {

  employee: Employee = {
    name: '',
    salary:  0,
    bonus: 0,
  }

  constructor(
    private element: ElementRef,
    private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  addEmployee(event) {
    console.warn(event);
    const bonus = this.employee.salary >= 1000 ? 0 : this.employee.bonus;
    this.employeeService.employees.push({name: this.employee.name, salary: this.employee.salary, bonus: bonus});
    console.log(this.employeeService.employees);
    this.hide();
  }

  show() {
    const divModal = this.getDivModal();
    $(divModal).modal('show');
  }

  private getDivModal(): HTMLElement {
    const nativeElement: HTMLElement = this.element.nativeElement;
    return nativeElement.firstChild.firstChild as HTMLElement;
  }


  hide() {
    const divModal = this.getDivModal();
    $(divModal).modal('hide');
  }

}
