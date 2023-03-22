import {Component, Input, OnInit} from '@angular/core';
import {getWeightTitle} from '../../../../shared/utils/textUtils';
import {removeDecimalValues} from '../../../../shared/utils/utils';

@Component({
  selector: 'app-weight-edit-view',
  templateUrl: './weight-edit-view.component.html',
})

export class WeightEditViewComponent implements OnInit {
  @Input() id: string;
  @Input() isMetric: boolean;

  value: number;
  initialValue: number;
  description: string;
  inputTitle: string;

  ngOnInit(): void {
    const data = null;

    this.initialValue = data?.value || null;
    this.value = data?.value || null;

    const prefix = data?.value ? 'Edit' : 'Enter';
    const suffix = getWeightTitle(this.isMetric);

    this.inputTitle = `${prefix} the weight ${suffix}`;
  }

  onValueSave(): void {
  }

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const newValue = removeDecimalValues(inputElement.value);

    this.value = Number(newValue);
  }

  onDescriptionChange($event: Event): void {
    const element = $event.currentTarget as HTMLInputElement;

    this.description = element.value;
  }
}
