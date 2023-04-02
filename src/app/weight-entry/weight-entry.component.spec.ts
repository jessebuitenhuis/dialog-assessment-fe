import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { WeightEntryComponent } from './weight-entry.component';
import { WeightService } from '../weight.service';

describe('WeightEntryComponent', () => {
  let component: WeightEntryComponent;
  let fixture: ComponentFixture<WeightEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeightEntryComponent],
      imports: [FormsModule],
      providers: [WeightService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addWeightEntry method when form is submitted', () => {
    spyOn(component, 'addWeightEntry');
    const form = fixture.debugElement.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(component.addWeightEntry).toHaveBeenCalled();
  });

  // Add more tests as needed.
});
