import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernPlatformComponent } from './modern-platform.component';

describe('ModernPlatformComponent', () => {
  let component: ModernPlatformComponent;
  let fixture: ComponentFixture<ModernPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModernPlatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
