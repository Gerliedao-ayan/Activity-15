import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  bookLit: string[] = ["c++", "java", "html"];
  item: string = '';

  addItems() {
    this.bookLit.push(this.item);
  }

  deleteBook(index: number) {
    this.bookLit.splice(index, 1);
  }
}
