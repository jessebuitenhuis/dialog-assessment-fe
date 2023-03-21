import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './components/text-input/text-input.component';
import { TitleComponent } from './components/title/title.component';
import { SubTitleComponent } from './components/sub-title/sub-title.component';

@NgModule({
  declarations: [
    TextInputComponent,
    TitleComponent,
    SubTitleComponent
  ],
    imports: [
        CommonModule,
    ],
  exports: [
    TextInputComponent,
    TitleComponent
  ]
})
export class SharedModule { }
