import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenttComponent } from './parentt.component';

describe('ParenttComponent', () => {
  let component: ParenttComponent;
  let fixture: ComponentFixture<ParenttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParenttComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
