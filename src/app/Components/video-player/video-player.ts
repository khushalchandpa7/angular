import { Component } from '@angular/core';
import { Video } from './video/video';

@Component({
  selector: 'yt-video-player',
  imports: [Video],
  templateUrl: './video-player.html',
  styleUrl: './video-player.css',
})
export class VideoPlayer {}
