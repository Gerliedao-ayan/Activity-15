import { Component } from '@angular/core';
interface Video {
  title: string;
}
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
  videoLis: Video[] = [
    { title: "The Dark Knight" },
    { title: "Pulp Fiction" }
  ];
  newVideoTitle: string = '';

  addVideo() {
    const newVideo: Video = { title: this.newVideoTitle };
    this.videoLis.push(newVideo);
    this.newVideoTitle = '';
  }

  deleteVideo(index: number) {
    this.videoLis.splice(index, 1);
  }
}
