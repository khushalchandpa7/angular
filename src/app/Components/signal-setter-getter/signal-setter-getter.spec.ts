import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalSetterGetter } from './signal-setter-getter';

describe('SignalSetterGetter', () => {
  let component: SignalSetterGetter;
  let fixture: ComponentFixture<SignalSetterGetter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalSetterGetter],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalSetterGetter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
