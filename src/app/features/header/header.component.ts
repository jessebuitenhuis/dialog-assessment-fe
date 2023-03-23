import {Component, Input, OnInit} from '@angular/core';
import {getWeightUnit} from '../../shared/utils/textUtils';

@Component({
  selector: 'app-header',
  template: `
    <header class="navbar navbar-expand-lg navbar-light bg-light p-2">
      <div class="justify-content-start flex-column ps-4">
        <app-title classes="m-0" [title]="'Hello ' + userName "></app-title>
        <app-sub-title classes="m-0" [subTitle]="weightTitle"></app-sub-title>
      </div>

      <div class="d-flex justify-content-end flex-row pe-4">
        <ng-content></ng-content>
      </div>
    </header>
  `,
})

export class HeaderComponent implements OnInit {
  @Input() userName: string;
  @Input() targetWeight: number;
  @Input() isMetric: boolean;

  weightTitle: string;

  ngOnInit(): void {
    const unitType = getWeightUnit(this.isMetric);

    this.weightTitle = `Your target weight is ${this.targetWeight}${unitType}`;
  }
}
