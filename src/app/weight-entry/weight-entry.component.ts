import { WeightEntry, WeightService } from '../weight.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-weight-entry',
  templateUrl: './weight-entry.component.html',
  styleUrls: [],
})
export class WeightEntryComponent {
  weight: number | null;
  description: string;

  constructor(private weightService: WeightService) {
    this.weight = null;
    this.description = '';
  }

  addWeightEntry(): void {
    if (this.weight) {
      const entry: WeightEntry = {
        date: new Date(),
        weight: this.weight,
        description: this.description,
      };
      this.weightService.addEntry(entry);
      this.weight = null;
      this.description = '';
    }
  }
}
