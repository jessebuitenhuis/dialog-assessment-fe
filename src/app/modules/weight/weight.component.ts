import { Component } from '@angular/core';
import { Weight } from './models/weight';
import { WeightService } from './weight.service';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.scss']
})
export class WeightComponent {

  constructor(
    private readonly weightService: WeightService
  ) { }

  saveGoal(goal: number): void {
    this.weightService.goal = goal;
  }

  addWeight(weight: Weight): void {
    this.weightService.addWeight(weight);
  }
}
