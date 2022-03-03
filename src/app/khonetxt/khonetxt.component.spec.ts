import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhonetxtComponent } from './khonetxt.component';

describe('KhonetxtComponent', () => {
  let component: KhonetxtComponent;
  let fixture: ComponentFixture<KhonetxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhonetxtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KhonetxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
