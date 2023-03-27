import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { StoredWeightData } from '../../../types';
import { DataService } from '../../core/services/data.service';
import { takeUntil } from 'rxjs/operators';
import { SharedService } from '../../core/services/shared.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-main-screen',
  template: `
    <div>
      <ng-container *ngIf="!items.length">
        <a routerLink="/edit">Edit Page</a>
        <div class="align-self-center">
          There is no previous records. Click
          <a routerLink="/edit">Here</a> to create your first one!
        </div>
      </ng-container>
      <ng-container *ngIf="items.length">
        <div class="d-flex justify-content-center px-4 py-2">
          <a routerLink="/edit">Add new record</a>
        </div>
        <div class="px-4">
          <app-weight-progress
            [currentValue]="currentWeight"
            [targetValue]="targetWeight"
          ></app-weight-progress>
        </div>

        <app-weight-view-list
          [isMetric]="isMetric"
          [items]="items"
        ></app-weight-view-list>
      </ng-container>
    </div>
  `,
})
export class MainScreenComponent implements OnInit, OnChanges, OnDestroy {
  @Input() userName: string;
  @Input() targetWeight: number;
  isMetric: boolean;

  items: StoredWeightData[];

  currentWeight: number;

  private ngUnsubscribe = new Subject<void>();

  constructor(
    private dataService: DataService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    const data = this.dataService.getData();

    this.items = data.sort(
      (a: StoredWeightData, b: StoredWeightData) => b.created - a.created
    );

    this.sharedService.userSettings$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(({ isMetric, targetWeight, userName }) => {
        // Do something with the additionalParam
        this.isMetric = isMetric;
        this.targetWeight = targetWeight;
        this.userName = userName;

        this.setCurrentWeight(this.items);
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items) {
      const updatedItems: unknown = changes.items;

      this.setCurrentWeight(updatedItems as StoredWeightData[]);
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  setCurrentWeight(items: StoredWeightData[]): void {
    const latestRecord = items.reduce((prev, current) => {
      return prev.created > current.created ? prev : current;
    });

    this.currentWeight = latestRecord.weight;
  }
}
