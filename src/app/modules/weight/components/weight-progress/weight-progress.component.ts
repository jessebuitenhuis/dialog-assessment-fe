import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { filter, shareReplay, takeUntil } from 'rxjs/operators';
import { WeightProgressRemaining } from '../../models/weight';
import { WeightService } from '../../weight.service';

@Component({
  selector: 'app-weight-progress',
  templateUrl: './weight-progress.component.html',
  styleUrls: ['./weight-progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeightProgressComponent implements OnDestroy {
  weight$ = this.weightService.getWeight().pipe(shareReplay(1));
  remaining: WeightProgressRemaining;
  private unsubscribe$: Subject<void> = new Subject();
  constructor(
    private readonly weightService: WeightService
  ) {
    combineLatest([
      this.weight$,
      this.weightService.getGoal()
    ])
      .pipe(
        filter(([weight, goal]) => weight.length && goal >= 0),
        takeUntil(this.unsubscribe$)
      ).subscribe(([weight, goal]) => {
        const latestWeight = weight[weight.length - 1].weight;
        const value = latestWeight - goal;
        const percent = goal / latestWeight * 100;

        this.remaining = { value, percent };
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
