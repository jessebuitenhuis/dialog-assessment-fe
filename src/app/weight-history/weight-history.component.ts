import { WeightEntry, WeightService } from '../weight.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-weight-history',
  templateUrl: './weight-history.component.html',
  styleUrls: [],
})
export class WeightHistoryComponent {
  constructor(public weightService: WeightService) {}
}
