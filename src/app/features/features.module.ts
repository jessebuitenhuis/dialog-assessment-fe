import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {WeightViewerModule} from './weight-viewer/weight-viewer.module';
import {WeightEditorModule} from './weight-editor/weight-editor.module';

import { HeaderComponent } from './header/header.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    WeightViewerModule,
    WeightEditorModule,
    SharedModule,
  ],
  exports: [
    WeightViewerModule,
    WeightEditorModule,
    HeaderComponent,
  ]
})

export class FeaturesModule { }
