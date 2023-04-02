import { Component, OnInit } from '@angular/core';
import { Unit, UnitService } from '../unit.service';

import { WeightService } from '../weight.service';

// ... other imports ...

@Component({
  selector: 'app-weight-history',
  templateUrl: './weight-history.component.html',
  styleUrls: ['./weight-history.component.scss'],
})
export class WeightHistoryComponent implements OnInit {
  unit: Unit;

  constructor(
    public unitService: UnitService,
    public weightService: WeightService
  ) {
    this.unitService.currentUnit.subscribe((unit) => (this.unit = unit));
  }

  ngOnInit(): void {}
}
