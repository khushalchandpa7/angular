import { Component } from '@angular/core';

@Component({
  selector: 'yt-video-btn',
  templateUrl: './video-button.html',
  styleUrl: './video-button.css',
})
export class VideoButton {
  uploadBtnClicked(event: PointerEvent) {
    console.dir(event);
  }
}
