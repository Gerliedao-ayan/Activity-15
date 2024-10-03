import { Component } from '@angular/core';
interface DevTool {
  name: string;
  category: string;
}
@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.css'
})
export class DeveloperComponent {
  devToolsLis: DevTool[] = [
    { name: "Visual Studio Code", category: "Code Editor" },
    { name: "Git", category: "Version Control" },
  ];
  newTool: string = '';
  newCategory: string = '';

  addTool() {
    const newTool: DevTool = { name: this.newTool, category: this.newCategory };
    this.devToolsLis.push(newTool);
    this.newTool = '';
    this.newCategory = '';
  }

  deleteTool(index: number) {
    this.devToolsLis.splice(index, 1);
  }
}
