import { Component, OnInit } from '@angular/core';
import { Unit, UnitService } from '../unit.service';
import { WeightEntry, WeightService } from '../weight.service';

@Component({
  selector: 'app-weight-entry',
  templateUrl: './weight-entry.component.html',
  styleUrls: [],
})
export class WeightEntryComponent implements OnInit {
  weight: number | null;
  description: string;
  unit: Unit;

  constructor(
    private weightService: WeightService,
    private unitService: UnitService
  ) {
    this.weight = null;
    this.description = '';
    this.unitService.currentUnit.subscribe((unit) => (this.unit = unit));
  }

  ngOnInit(): void {}

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
