import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inner } from './inner';

describe('Inner', () => {
  let component: Inner;
  let fixture: ComponentFixture<Inner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inner],
    }).compileComponents();

    fixture = TestBed.createComponent(Inner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
