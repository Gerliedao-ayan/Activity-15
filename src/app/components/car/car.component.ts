import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  carModelLis: string[] = ["Toyota", "Honda", "Mustang"];
  item: string = '';

  addItems() {
    this.carModelLis.push(this.item);
  }

  deleteCarModel(index: number) {
    this.carModelLis.splice(index, 1);
  }
}
