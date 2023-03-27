import {Component, Input} from '@angular/core';
import {StoredWeightData} from '../../../../../types';

@Component({
  selector: 'app-weight-view-list',
  template: `
    <div class="card-container px-4">
      <div class="row">
        <div class="p-2 col-sm-6" *ngFor="let item of items">
          <app-weight-viewer-item [id]="item.id" [weight]="item.weight" [description]="item.description" [created]="item.created" [isMetric]="isMetric"></app-weight-viewer-item>
        </div>
      </div>
    </div>
  `,
})

export class WeightViewListComponent {
  @Input() isMetric: boolean;
  @Input() items: Array<StoredWeightData>;
}
