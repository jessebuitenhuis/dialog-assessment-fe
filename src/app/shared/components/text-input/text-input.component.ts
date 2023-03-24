import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-input',
  template: `
  <div class="mb-3">
    <label [class]="titleClasses">{{title}}</label>
    <input [type]="type"
           [placeholder]="placeholder"
           [value]="value"
           (input)="valueChange($event)"
           [disabled]="disabled"
           [name]="name"
    [class]="inputClasses">
  </div>
  `,
})

export class TextInputComponent {
  @Input() classes = '';
  @Input() name = 'text-input-component';
  @Input() type = 'text';
  @Input() disabled = false;
  @Input() value: string | number;
  @Input() inputClasses: string;
  @Input() placeholder = '';
  @Input() title = '';
  @Input() titleName = '';
  @Input() titleClasses: string;
  @Input() valueChange: (value: Event) => void;
}


