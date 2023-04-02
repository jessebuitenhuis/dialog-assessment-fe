import { Component } from '@angular/core';
import { WeightService } from '../weight.service';

@Component({
  selector: 'app-goal-setting',
  templateUrl: './goal-setting.component.html',
  styleUrls: [],
})
export class GoalSettingComponent {
  goal: number | null;

  constructor(public weightService: WeightService) {
    this.goal = null;
  }

  setGoal(): void {
    if (this.goal) {
      this.weightService.setGoal(this.goal);
    }
  }
}
