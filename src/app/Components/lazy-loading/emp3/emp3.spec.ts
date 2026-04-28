import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emp3 } from './emp3';

describe('Emp3', () => {
  let component: Emp3;
  let fixture: ComponentFixture<Emp3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emp3],
    }).compileComponents();

    fixture = TestBed.createComponent(Emp3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
