import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightViewItemComponent } from './weight-view-item.component';

describe('WeightViewItemComponent', () => {
  let component: WeightViewItemComponent;
  let fixture: ComponentFixture<WeightViewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightViewItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
