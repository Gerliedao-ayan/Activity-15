import { Component } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent {
  countryLis: string[] = ["north korea", "Canada"];
  item: string = '';

  addItems() {
    this.countryLis.push(this.item);
  }

  deleteCountry(index: number) {
    this.countryLis.splice(index, 1);
  }
}
