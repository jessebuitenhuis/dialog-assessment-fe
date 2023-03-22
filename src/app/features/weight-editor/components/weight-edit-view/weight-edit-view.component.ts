import {Component, Input, OnInit} from '@angular/core';
import {getWeightTitle} from '../../../../shared/utils/textUtils';
import {DataService} from '../../../../core/services/data.service';
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
    const data = this.dataService.getDataById(this.id);

    this.initialValue = data?.weight || null;
    this.value = data?.weight || null;
    this.description = data?.description;

    const prefix = data?.weight ? 'Edit' : 'Enter';
    const suffix = getWeightTitle(this.isMetric);

    this.inputTitle = `${prefix} the weight ${suffix}`;
  }

  constructor(private dataService: DataService) {}

  onValueSave(): void {
    if (this.id) {
      this.dataService.updateData(this.id, { weight: this.value, description: this.description }, this.isMetric);
    } else {
      this.dataService.addData({ weight: this.value, description: this.description}, this.isMetric);
    }
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
