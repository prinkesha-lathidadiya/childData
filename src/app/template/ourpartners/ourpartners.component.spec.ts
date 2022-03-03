import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurpartnersComponent } from './ourpartners.component';

describe('OurpartnersComponent', () => {
  let component: OurpartnersComponent;
  let fixture: ComponentFixture<OurpartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurpartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurpartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
