import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoButton } from './video-button';

describe('VideoButton', () => {
  let component: VideoButton;
  let fixture: ComponentFixture<VideoButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoButton],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
