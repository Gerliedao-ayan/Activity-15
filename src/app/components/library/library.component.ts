import { Component } from '@angular/core';
interface Library {
  name: string;
}
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {
  libraryLis: Library[] = [
    { name: "lodash" },
    { name: "axios" }
  ];
  newLibrary: string = '';

  addLibrary() {
    const newLibrary: Library = { name: this.newLibrary };
    this.libraryLis.push(newLibrary);
    this.newLibrary = '';
  }

  deleteLibrary(index: number) {
    this.libraryLis.splice(index, 1);
  }
}
