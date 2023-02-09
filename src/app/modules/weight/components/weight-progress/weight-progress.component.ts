import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
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
    private readonly weightService: WeightService,
    private cdr: ChangeDetectorRef
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
        // Marking for check because `remaining` variable is used in view
        // and we need to render this value. There are no other triggers that
        // trigger change detection and we set this value only when there is goal and
        // we have weight records
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
