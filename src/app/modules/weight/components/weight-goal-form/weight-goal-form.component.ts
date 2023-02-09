import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-weight-goal-form',
  templateUrl: './weight-goal-form.component.html',
  styleUrls: ['./weight-goal-form.component.scss']
})
export class WeightGoalFormComponent {
  goalControl = new FormControl(0, [Validators.required, Validators.min(0)]);
  @Output() goalSaved: EventEmitter<number> = new EventEmitter();
  constructor() { }

  saveGoal(): void {
    this.goalSaved.emit(this.goalControl.value);
  }
}
