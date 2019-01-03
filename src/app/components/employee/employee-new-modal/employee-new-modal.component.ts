import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/models/employees';
import { EmployeeService } from 'src/app/services/employee.service';

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

  constructor(
    private element: ElementRef,
    private employeeService: EmployeeService) { }

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
