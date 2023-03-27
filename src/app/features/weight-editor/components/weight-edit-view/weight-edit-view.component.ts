import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Location } from '@angular/common';
import { getWeightUnit } from '../../../../shared/utils/textUtils';
import { DataService } from '../../../../core/services/data.service';
import { removeDecimalValues } from '../../../../shared/utils/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weight-edit-view',
  templateUrl: './weight-edit-view.component.html',
})
export class WeightEditViewComponent implements OnInit, OnChanges {
  @Input() id: string;
  @Input() isMetric: boolean;

  value: number;

  isRecordUpdated: boolean;
  description: string;
  inputTitle: string;

  ngOnInit(): void {
    const data = this.dataService.getDataById(this.id);

    this.isRecordUpdated = false;
    this.value = data?.weight || null;
    this.description = data?.description || '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.isMetric) {
      this.handleIsMetricChange();
    }
  }

  constructor(
    private dataService: DataService,
    private router: Router,
    private location: Location
  ) {}

  async onValueSave(): Promise<void> {
    if (this.id) {
      this.dataService.updateData(
        this.id,
        { weight: this.value, description: this.description },
        this.isMetric
      );
    } else {
      this.dataService.addData(
        { weight: this.value, description: this.description },
        this.isMetric
      );
    }

    await this.router.navigate(['/']);
  }

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const newValue = removeDecimalValues(inputElement.value);

    this.value = Number(newValue);
    this.isRecordUpdated = true;
  }

  onDescriptionChange($event: Event): void {
    const element = $event.currentTarget as HTMLInputElement;

    this.description = element.value;
    this.isRecordUpdated = true;
  }

  handleIsMetricChange(): void {
    const prefix = this.value ? 'Edit' : 'Enter';
    const unit = getWeightUnit(this.isMetric);

    this.inputTitle = `${prefix} the weight (in ${unit})`;
  }

  handleCancelClick(): void {
    this.location.back();
  }
}
