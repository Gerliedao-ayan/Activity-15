import {Component, Injectable} from '@angular/core';
import {FormsModule} from "@angular/forms";
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent {
  groceryLis: string[] = ["Kimchi", "Paper", "Soda", "Cheese"];
  newItem: string = '';

  addItem() {
    this.groceryLis.push(this.newItem);
    this.newItem = ''; // Clear the input field
  }

  deleteItem(index: number) {
    this.groceryLis.splice(index, 1);
  }
}
