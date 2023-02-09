import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { WeightGoalFormComponent } from './components/weight-goal-form/weight-goal-form.component';
import { WeightProgressComponent } from './components/weight-progress/weight-progress.component';
import { WeightUpsertFormComponent } from './components/weight-upsert-form/weight-upsert-form.component';
import { WeightComponent } from './weight.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    WeightComponent,
    WeightGoalFormComponent,
    WeightUpsertFormComponent,
    WeightProgressComponent
  ]
})
export class WeightModule { }
