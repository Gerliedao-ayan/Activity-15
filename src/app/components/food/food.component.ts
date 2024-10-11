import {Component, Injectable} from '@angular/core';
import {FormsModule} from "@angular/forms";
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {
  menuItems: string[] = ["Burger", "Footlong", "Salad", "Spaghetti"];
  newIte: string = '';

  addMenuItem() {
    this.menuItems.push(this.newIte);
    this.newIte = ''; // Clear the input field
  }

  deleteMenuItem(index: number) {
    this.menuItems.splice(index, 1);
  }
}
