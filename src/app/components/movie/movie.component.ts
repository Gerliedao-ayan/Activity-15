import { Component } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  movieLis: string[] = ["shrek", "wrong turn"];
  item: string = '';

  addItems() {
    this.movieLis.push(this.item);
  }

  deleteMovie(index: number) {
    this.movieLis.splice(index, 1);
  }
}
