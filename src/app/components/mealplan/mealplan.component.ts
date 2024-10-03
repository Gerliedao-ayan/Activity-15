import { Component } from '@angular/core';

interface Meal {
  name: string;
  day: string;
}
@Component({
  selector: 'app-mealplan',
  templateUrl: './mealplan.component.html',
  styleUrl: './mealplan.component.css'
})
export class MealplanComponent {
  mealPla: Meal[] = [
    { name: "Breakfast Burrito", day: "Monday" },
    { name: "Pasta with Veggies", day: "Wednesday" }
  ];
  newMeal: string = '';
  newDay: string = '';
  days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  addMeal() {
    const newMeal: Meal = { name: this.newMeal, day: this.newDay };
    this.mealPla.push(newMeal);
    this.newMeal = '';
    this.newDay = '';
  }

  deleteMeal(index: number) {
    this.mealPla.splice(index, 1);
  }
}
