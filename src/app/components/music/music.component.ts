import { Component } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {
  playlis: string[] = ["Bohemian Rhapsody", "Imagine", "Hotel California"];
  newSong: string = '';

  addSong() {
    this.playlis.push(this.newSong);
    this.newSong = ''; // Clear the input field
  }

  deleteSong(index: number) {
    this.playlis.splice(index, 1);
  }
}
