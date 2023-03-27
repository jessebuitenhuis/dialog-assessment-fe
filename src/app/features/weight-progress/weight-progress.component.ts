import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-weight-progress',
  template: `
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        [style]="customStyle"
        [attr.aria-valuenow]="valueNow"
        [attr.aria-valuemin]="valueMin"
        [attr.aria-valuemax]="valueMax"
      >
        {{valueRemain}}% left to your target weight!
      </div>
    </div>
  `,
})
export class WeightProgressComponent implements OnChanges, OnInit {
  @Input() currentValue: number;
  @Input() targetValue: number;

  private readonly maxValue = 100;

  customStyle: {
    width: string;
  };
  valueNow: any;
  valueMin: any;
  valueMax: any;
  valueRemain: number;

  ngOnInit(): void {
    this.valueMax = this.maxValue;
    this.valueMin = 0;

    this.updateProgressBar(this.currentValue, this.targetValue);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.values) {
      this.updateProgressBar(this.currentValue, this.targetValue);
    }
  }

  private updateProgressBar(currentValue: number, targetValue: number): void {
    const targetPercentage = targetValue / 100;

    const progressPercentage = currentValue / targetPercentage;
    const progressLeft = this.maxValue - progressPercentage;

    this.valueNow = progressPercentage;
    this.valueRemain = Math.floor(progressLeft);
    this.customStyle = {
      width: `${progressPercentage}%`
    };
  }
}
