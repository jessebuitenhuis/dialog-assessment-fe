import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddButtonComponent } from './add-button.component';

describe('AddButtonComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AddButtonComponent],
    }).compileComponents();
  });
});
