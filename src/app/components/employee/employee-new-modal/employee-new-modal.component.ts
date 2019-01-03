import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Employee } from 'src/app/models/employees';
import { EmployeeService } from 'src/app/services/employee.service';
import { ModalComponent } from '../../modal/modal.component';

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
  };

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  @ViewChild(ModalComponent)
  modalComponent: ModalComponent;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  addEmployee(event) {
    // const copy = Object.assign({}, this.employee);
    const employee = {name: this.employee.name, salary: this.employee.salary, bonus: this.employee.bonus};
    this.employeeService.addEmployee(employee);
    this.onSubmit.emit(employee);
    this.hide();
  }

  show() {
    this.modalComponent.show();
  }

  hide() {
    this.modalComponent.hide();
  }

}
