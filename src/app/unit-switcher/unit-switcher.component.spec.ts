import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitSwitcherComponent } from './unit-switcher.component';

describe('UnitSwitcherComponent', () => {
  let component: UnitSwitcherComponent;
  let fixture: ComponentFixture<UnitSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitSwitcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
