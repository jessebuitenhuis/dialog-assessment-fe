import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './components/text-input/text-input.component';
import { TitleComponent } from './components/title/title.component';
import { SubTitleComponent } from './components/sub-title/sub-title.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { SwitchComponent } from './components/switch/switch.component';

@NgModule({
  declarations: [
    TextInputComponent,
    TitleComponent,
    SubTitleComponent,
    RadioButtonComponent,
    SwitchComponent,
  ],
    imports: [
        CommonModule,
    ],
  exports: [
    TextInputComponent,
    TitleComponent,
    SubTitleComponent,
    RadioButtonComponent,
    SwitchComponent
  ]
})
export class SharedModule { }
