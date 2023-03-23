import {Component, Input, OnInit} from '@angular/core';
import {StoredWeightData} from '../../../types';
import {DataService} from '../../core/services/data.service';

@Component({
  selector: 'app-main-screen',
  template: `
    <div>
      <ng-container *ngIf="!items.length">
        <a routerLink="/edit">Edit Page</a>
        <div class="align-self-center">
          There is no previous recordings. Click <a routerLink="/edit">Here</a> to create your first one!
        </div>
      </ng-container>
      <ng-container *ngIf="items.length">
        <div class="align-self-center">
          Click <a routerLink="/edit">here</a> to add new record
        </div>
        <app-weight-view-list [isMetric]="isMetric"></app-weight-view-list>
      </ng-container>
    </div>
  `,
})
export class MainScreenComponent implements OnInit {
  @Input() userName: string;
  @Input() targetWeight: number;
  @Input() isMetric: boolean;

  items: StoredWeightData[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    const data = this.dataService.getData();

    this.items = data.sort((a: StoredWeightData, b: StoredWeightData) => b.created - a.created);
  }
}
