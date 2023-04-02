import { Component, OnInit } from '@angular/core';
import { Unit, UnitService } from '../unit.service';

@Component({
  selector: 'app-unit-switcher',
  templateUrl: './unit-switcher.component.html',
  styleUrls: ['./unit-switcher.component.scss'],
})
export class UnitSwitcherComponent implements OnInit {
  unit: Unit;

  constructor(private unitService: UnitService) {
    this.unitService.currentUnit.subscribe((unit) => (this.unit = unit));
  }

  ngOnInit(): void {}

  toggleUnit() {
    this.unitService.toggleUnit();
  }
}
