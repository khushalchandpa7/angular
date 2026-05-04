import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContainer } from './ng-container';

describe('NgContainer', () => {
  let component: NgContainer;
  let fixture: ComponentFixture<NgContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(NgContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
