import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalState } from './global-state';

describe('GlobalState', () => {
  let component: GlobalState;
  let fixture: ComponentFixture<GlobalState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalState],
    }).compileComponents();

    fixture = TestBed.createComponent(GlobalState);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
