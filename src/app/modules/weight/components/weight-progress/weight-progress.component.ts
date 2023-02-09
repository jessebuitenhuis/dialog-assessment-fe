import { Component } from '@angular/core';
import { WeightService } from '../../weight.service';

@Component({
  selector: 'app-weight-progress',
  templateUrl: './weight-progress.component.html',
  styleUrls: ['./weight-progress.component.scss']
})
export class WeightProgressComponent {
  weight$ = this.weightService.getWeight();
  constructor(
    private readonly weightService: WeightService
  ) { }
}
