import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Weight } from '../../models/weight';

@Component({
  selector: 'app-weight-upsert-form',
  templateUrl: './weight-upsert-form.component.html',
  styleUrls: ['./weight-upsert-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeightUpsertFormComponent {
  form: FormGroup;
  @Output() weightAdded: EventEmitter<Weight> = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  addWeight(): void {
    this.weightAdded.emit(this.form.value);
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      weight: new FormControl(0, [Validators.required, Validators.min(0)]),
      comment: new FormControl('')
    });
  }
}
