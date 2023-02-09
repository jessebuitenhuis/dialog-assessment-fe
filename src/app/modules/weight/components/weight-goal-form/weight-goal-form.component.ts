import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { filter, first } from 'rxjs/operators';
import { WeightService } from '../../weight.service';

@Component({
  selector: 'app-weight-goal-form',
  templateUrl: './weight-goal-form.component.html',
  styleUrls: ['./weight-goal-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeightGoalFormComponent implements OnInit {
  goalControl = new FormControl(0, [Validators.required, Validators.min(0)]);
  @Output() goalSaved: EventEmitter<number> = new EventEmitter();
  constructor(
    private readonly weightService: WeightService
  ) { }

  ngOnInit(): void {
    this.weightService.getGoal()
      .pipe(
        // Making ssure goal is truthy and with valid value
        filter(goal => goal && goal >= 0),
        first()
      )
      .subscribe(goal => this.goalControl.setValue(goal));
  }

  saveGoal(): void {
    this.goalSaved.emit(this.goalControl.value);
  }
}
