import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {WeightEditViewComponent} from './components/weight-edit-view/weight-edit-view.component';

@NgModule({
  declarations: [
    WeightEditViewComponent
  ],
  imports: [
    CommonModule,
  ],
    exports: [
        WeightEditViewComponent
    ],
})

export class WeightEditorModule { }
