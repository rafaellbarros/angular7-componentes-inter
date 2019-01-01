import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @ViewChild(EmployeeNewModalComponent) // pegar uma referencia de um elemento
  employeeNewModal: EmployeeNewModalComponent;

  constructor(public employeeService: EmployeeService) {
  }

  ngOnInit() {
  }

  openNewModal() {
    this.employeeNewModal.show();
  }

  getSalaryColor(e) {
    return e.salary > 2000 ? 'green' : null;
  }

}
