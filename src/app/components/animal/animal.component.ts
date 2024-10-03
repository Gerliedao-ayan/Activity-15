import { Component } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css'
})
export class AnimalComponent {
  animalLis: string[] = ["Dog", "Cat"];
  item: string = '';

  addItems() {
    this.animalLis.push(this.item);
  }

  deleteAnimal(index: number) {
    this.animalLis.splice(index, 1);
  }
}
