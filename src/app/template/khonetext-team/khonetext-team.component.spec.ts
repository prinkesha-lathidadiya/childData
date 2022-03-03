import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhonetextTeamComponent } from './khonetext-team.component';

describe('KhonetextTeamComponent', () => {
  let component: KhonetextTeamComponent;
  let fixture: ComponentFixture<KhonetextTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhonetextTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KhonetextTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
