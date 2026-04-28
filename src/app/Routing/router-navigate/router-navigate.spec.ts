import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterNavigate } from './router-navigate';

describe('RouterNavigate', () => {
  let component: RouterNavigate;
  let fixture: ComponentFixture<RouterNavigate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterNavigate],
    }).compileComponents();

    fixture = TestBed.createComponent(RouterNavigate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
