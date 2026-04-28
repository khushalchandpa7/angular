import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamHome } from './team-home';

describe('TeamHome', () => {
  let component: TeamHome;
  let fixture: ComponentFixture<TeamHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamHome],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
