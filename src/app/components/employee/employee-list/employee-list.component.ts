import { Component, OnInit, ViewChild } from '@angular/core';

import { Employee } from 'src/app/models/employees';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeDeleteModalComponent } from '../employee-delete-modal/employee-delete-modal.component';
import { EmployeeEditModalComponent } from '../employee-edit-modal/employee-edit-modal.component';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';


@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee: Employee;
  employeeToEdit: Employee;
  employeeToDelete: Employee;
  data = new Date();

  showMessageSuccess = false;

  @ViewChild(EmployeeNewModalComponent) // pegar uma referencia de um elemento
  employeeNewModal: EmployeeNewModalComponent;

  @ViewChild(EmployeeEditModalComponent) // pegar uma referencia de um elemento
  employeeEditModal: EmployeeEditModalComponent;

  @ViewChild(EmployeeDeleteModalComponent) // pegar uma referencia de um elemento
  employeeDeleteModal: EmployeeDeleteModalComponent;

  constructor(public employeeService: EmployeeService) {
  }

  ngOnInit() {
  }

  openNewModal() {
    this.employeeNewModal.show();
  }


  openEditModal(employee: Employee) {
    this.employeeToEdit = employee;
    this.employeeEditModal.show();
  }

  openDestroyModal(employee: Employee) {
    this.employeeToDelete = employee;
    this.employeeDeleteModal.show();
  }

  onNewEmployee(employee: Employee) {
    console.log('employee: ', employee);
    this.employee = employee;
    this.showMessageSuccess = true;
  }

  onEditEmployee(employee: Employee) {
    console.log('employee: ', employee);
    // this.employee = employee;
  }

  onDestroyEmployee(employee: Employee) {
    console.log('employee: ', employee);
    // this.employee = employee;
  }

  getSalaryColor(e) {
    return e.salary > 2000 ? 'green' : null;
  }

  fechou(event) {
    console.log('fechou ', event);
  }

  mostrou(event) {
    console.log('mostrou ', event);
  }

}
