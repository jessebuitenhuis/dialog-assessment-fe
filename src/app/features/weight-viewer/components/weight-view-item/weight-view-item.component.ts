import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { formatDate, kgToLbs } from '../../../../shared/utils/utils';
import { getWeightUnit } from '../../../../shared/utils/textUtils';

@Component({
  selector: 'app-weight-viewer-item',
  template: `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <h6 class="card-subtitle fw-lighter mb-2 text-muted">
          Created at {{ dateCreated }}
        </h6>
        <p class="card-text">{{ description }}</p>
        <a [href]="id" class="card-link">Edit</a>
      </div>
    </div>
  `,
})
export class WeightViewItemComponent implements OnInit, OnChanges {
  @Input() id: string;
  @Input() weight: number;
  @Input() description: string;
  @Input() created: number;
  @Input() isMetric: boolean;

  title: string;
  dateCreated: string;

  ngOnInit(): void {
    const weight = this.isMetric ? this.weight : kgToLbs(this.weight);

    this.title = `${weight} ${getWeightUnit(this.isMetric)}`;
    this.dateCreated = formatDate(Number(this.created));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.isMetric || changes.weight) {
      this.handleIsMetricAndWeightChange();
    }
  }

  handleIsMetricAndWeightChange(): void {
    const weight = this.isMetric ? this.weight : kgToLbs(this.weight);

    this.title = `${weight} ${getWeightUnit(this.isMetric)}`;
  }
}
