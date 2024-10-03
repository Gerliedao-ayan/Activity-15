import { Component } from '@angular/core';
interface Building {
  name: string;
}
@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrl: './building.component.css'
})
export class BuildingComponent {
  buildingLis: Building[] = [
    { name: "Main Building" },
    { name: "Science Hall" }
  ];
  newBuilding: string = '';

  addBuilding() {
    const newBuilding: Building = { name: this.newBuilding };
    this.buildingLis.push(newBuilding);
    this.newBuilding = '';
  }

  deleteBuilding(index: number) {
    this.buildingLis.splice(index, 1);
  }
}
