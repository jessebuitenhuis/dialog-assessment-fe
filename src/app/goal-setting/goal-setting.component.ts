import { Unit, UnitService } from '../unit.service';

import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { WeightService } from '../weight.service';

@Component({
  selector: 'app-goal-setting',
  templateUrl: './goal-setting.component.html',
  styleUrls: [],
})
export class GoalSettingComponent implements OnInit {
  unit: Unit;
  goal: number | null;

  constructor(
    public weightService: WeightService,
    private unitService: UnitService
  ) {
    this.goal = null;
    this.unitService.currentUnit.subscribe((unit) => (this.unit = unit));
  }
  ngOnInit(): void {}

  setGoal(): void {
    if (this.goal) {
      this.weightService.setGoal(this.goal);
    }
  }
}
