import { Component } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrl: './fruit.component.css'
})
export class FruitComponent {
  fruitLis: string[] = ["grapes", "dragonfruit", "cherry"];
  item: string = '';

  addItems() {
    this.fruitLis.push(this.item);
  }

  deleteFruit(index: number) {
    this.fruitLis.splice(index, 1);
  }
}
