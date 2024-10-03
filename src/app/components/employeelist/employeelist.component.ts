import { Component } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
  employerList: string[] = ["employer1", "employer2"];
  item: string = '';

  addItems() {
    this.employerList.push(this.item);
  }

  deleteEmployee(index: number) {
    this.employerList.splice(index, 1);
  }
}
