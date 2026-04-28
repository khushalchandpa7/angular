import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emp2 } from './emp2';

describe('Emp2', () => {
  let component: Emp2;
  let fixture: ComponentFixture<Emp2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emp2],
    }).compileComponents();

    fixture = TestBed.createComponent(Emp2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
