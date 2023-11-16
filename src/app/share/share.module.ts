import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';

const ELEMENTS = [CardComponent];

@NgModule({
  declarations: [...ELEMENTS],
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  exports: [...ELEMENTS],
})
export class ShareModule {}
