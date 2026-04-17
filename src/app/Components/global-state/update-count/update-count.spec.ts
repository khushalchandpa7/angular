import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCount } from './update-count';

describe('UpdateCount', () => {
  let component: UpdateCount;
  let fixture: ComponentFixture<UpdateCount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCount],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateCount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
