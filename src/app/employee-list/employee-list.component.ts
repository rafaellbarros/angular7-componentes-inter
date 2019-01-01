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
    console.log('> ', this.employeeNewModal);
    setTimeout(() => {
      console.log(this.employeeNewModal);
      this.employeeNewModal.show();
    }, 2000);

  }

  ngOnInit() {
  }

  getSalaryColor(e) {
    return e.salary > 2000 ? 'green' : null;
  }

}
