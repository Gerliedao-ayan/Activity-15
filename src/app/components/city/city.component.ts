import { Component } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent {
  cityLis: string[] = ["spain", "america", "korea"];
  item: string = '';

  addItems() {
    this.cityLis.push(this.item);
  }

  deleteCity(index: number) {
    this.cityLis.splice(index, 1);
  }
}
