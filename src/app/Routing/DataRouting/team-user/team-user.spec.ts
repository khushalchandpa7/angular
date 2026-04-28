import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamUser } from './team-user';

describe('TeamUser', () => {
  let component: TeamUser;
  let fixture: ComponentFixture<TeamUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamUser],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
