import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emp1 } from './emp1';

describe('Emp1', () => {
  let component: Emp1;
  let fixture: ComponentFixture<Emp1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emp1],
    }).compileComponents();

    fixture = TestBed.createComponent(Emp1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
