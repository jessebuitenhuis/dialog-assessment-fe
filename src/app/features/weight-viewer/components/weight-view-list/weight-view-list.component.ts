import {Component, Input, OnInit} from '@angular/core';
import {StoredWeightData} from '../../../../../types';
import {DataService} from '../../../../core/services/data.service';

@Component({
  selector: 'app-weight-view-list',
  template: `
    <div class="card-container p-4">
      <div class="row">
        <div class="p-2 col-sm-6" *ngFor="let item of items">
          <app-weight-viewer-item [id]="item.id" [weight]="item.weight" [description]="item.description" [created]="item.created" [isMetric]="isMetric"></app-weight-viewer-item>
        </div>
      </div>
    </div>
  `,
})

export class WeightViewListComponent implements OnInit {
  @Input() isMetric: boolean;

  items: StoredWeightData[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    const data = this.dataService.getData();

    this.items = data.sort((a: StoredWeightData, b: StoredWeightData) => b.created - a.created);
  }
}
