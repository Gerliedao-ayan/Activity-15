import { Component } from '@angular/core';

interface Composer {
  name: string;
}
@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html',
  styleUrl: './composer.component.css'
})
export class ComposerComponent {
  composerLis: Composer[] = [
    { name: "Ludwig van Beethoven" },
    { name: "Johann Sebastian Bach" }
  ];
  newComposer: string = '';

  addComposer() {
    const newComposer: Composer = { name: this.newComposer };
    this.composerLis.push(newComposer);
    this.newComposer = '';
  }

  deleteComposer(index: number) {
    this.composerLis.splice(index, 1);
  }
}
