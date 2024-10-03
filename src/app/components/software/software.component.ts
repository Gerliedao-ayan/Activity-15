import { Component } from '@angular/core';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrl: './software.component.css'
})
export class SoftwareComponent {
  software: string[] = [ "software1"];
  item: string = '';

  addItems() {
    this.software.push(this.item);
  }

  deleteGame(index: number) {
    this.software.splice(index, 1);
  }
}
