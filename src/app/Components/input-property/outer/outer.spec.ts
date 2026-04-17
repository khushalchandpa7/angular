import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Outer } from './outer';

describe('Outer', () => {
  let component: Outer;
  let fixture: ComponentFixture<Outer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Outer],
    }).compileComponents();

    fixture = TestBed.createComponent(Outer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
