import { Component } from '@angular/core';
interface Laptop {
  model: string;
}
@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrl: './laptop.component.css'
})
export class LaptopComponent {
  laptopLis: Laptop[] = [
    { model: "MacBook Pro 16" },
    { model: "Lenovo ThinkPad X1 Carbon" }
  ];
  newLaptop: string = '';

  addLaptop() {
    const newLaptop: Laptop = { model: this.newLaptop };
    this.laptopLis.push(newLaptop);
    this.newLaptop = '';
  }

  deleteLaptop(index: number) {
    this.laptopLis.splice(index, 1);
  }

}
