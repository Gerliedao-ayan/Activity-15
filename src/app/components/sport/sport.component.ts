import {Component, Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrl: './sport.component.css'
})
export class SportComponent {
  sportsLis: string[] = ["tennis", "Volleyball"];
  item: string = '';

  addItems() {
    this.sportsLis.push(this.item);
  }

  deleteSport(index: number) {
    this.sportsLis.splice(index, 1);
  }
}
