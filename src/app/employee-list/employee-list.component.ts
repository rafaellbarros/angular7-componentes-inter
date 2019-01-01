import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
import { EmployeeEditModalComponent } from '../employee-edit-modal/employee-edit-modal.component';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee: Employee;
  employeeToEdit: Employee;

  showMessageSuccess = false;

  @ViewChild(EmployeeNewModalComponent) // pegar uma referencia de um elemento
  employeeNewModal: EmployeeNewModalComponent;

  @ViewChild(EmployeeEditModalComponent) // pegar uma referencia de um elemento
  employeeEditModal: EmployeeEditModalComponent;

  constructor(public employeeService: EmployeeService) {
  }

  ngOnInit() {
  }

  openEditModal(employee: Employee) {
    this.employeeToEdit = employee;
    this.employeeEditModal.show();
  }

  openNewModal() {
    this.employeeNewModal.show();
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

  getSalaryColor(e) {
    return e.salary > 2000 ? 'green' : null;
  }

}
