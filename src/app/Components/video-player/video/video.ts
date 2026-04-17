import { Component } from '@angular/core';
import { VideoButton } from '../video-button/video-button';

@Component({
  selector: 'yt-video',
  imports: [VideoButton],
  templateUrl: './video.html',
  styleUrl: './video.css',
})
export class Video {
  
}
