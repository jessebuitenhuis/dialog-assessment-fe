import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightEditViewComponent } from './weight-edit-view.component';

describe('WeightEditViewComponent', () => {
  let component: WeightEditViewComponent;
  let fixture: ComponentFixture<WeightEditViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightEditViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
