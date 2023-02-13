import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { filter, shareReplay, takeUntil } from 'rxjs/operators';
import { Weight, WeightProgressRemaining } from '../../models/weight';
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
  requiredForGoal: number;
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
        // Setting remaining progress
        this.remaining = this.getRemainingWeightProgress(weight, goal);

        const diff = this.getWeightProgressDifference(weight);
        // Decreasing weight length by 1 because there is no initial value for substraction
        // and thus average would be off
        const average = this.getAverageWeightLoss(diff, weight.length - 1);
        this.requiredForGoal = this.getEstimateForGoal(this.remaining.value, average);

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

  private getRemainingWeightProgress(weights: Weight[], goal: number): WeightProgressRemaining {
    const latestWeight = weights[weights.length - 1].weight;
    const value = latestWeight - goal;
    const percent = goal / latestWeight * 100;
    return { value, percent };
  }

  private getWeightProgressDifference(weights: Weight[]): number {
    let total = 0;

    // tslint:disable-next-line:prefer-for-of
    // NOTE: Using for-loop because its more performant and easier to use
    // for this particular case
    for (let i = 0; i < weights.length; i++) {
      const { weight } = weights[i];
      const nextWeight = weights[i + 1]?.weight;
      // Calculating difference
      if (nextWeight) {
        total += weight - nextWeight;
      } else {
        break;
      }
    }

    return total;
  }

  /**
   * Method calculates average value of total weight loss
   *
   * @private
   * @param {number} totalLoss Total amount of weight loss across all records
   * @param {number} recordNum Amount of weight records to count average
   * @return {number} Returns average weight loss. If `recordNum` is "0" then will return `null`
   * @memberof WeightProgressComponent
   */
  private getAverageWeightLoss(totalLoss: number, recordNum: number): number {
    // Returning "null" to show that we can't get average value if there is not enough data
    // like record number is not provided
    if (!recordNum) {
      return null;
    }
    return totalLoss / recordNum;
  }

  private getEstimateForGoal(remaining: number, avgLoss: number): number {
    if (!remaining || remaining < 0) {
      return null;
    }

    return remaining / avgLoss;
  }
}
