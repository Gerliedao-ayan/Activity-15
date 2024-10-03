import { Component } from '@angular/core';

@Component({
  selector: 'app-laguage',
  templateUrl: './laguage.component.html',
  styleUrl: './laguage.component.css'
})
export class LaguageComponent {
  languageLis: string[] = ["English"];
  item: string = '';

  addItems() {
    this.languageLis.push(this.item);
  }

  deleteLanguage(index: number) {
    this.languageLis.splice(index, 1);
  }
}
