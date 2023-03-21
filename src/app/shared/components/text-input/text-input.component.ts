import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-input',
  template: `
  <div class="mb-3">
    <label [class]="titleName">{{title}}</label>
    <input [type]="type"
           [placeholder]="placeholder"
           [value]="value"
           (input)="valueChange($event)"
           [disabled]="disabled"
           [name]="name">
  </div>
  `,
  styleUrls: ['./text-input.component.scss']
})

export class TextInputComponent {
  @Input() classes = '';
  @Input() name = 'text-input-component';
  @Input() type = 'text';
  @Input() disabled = false;
  @Input() value: string | number;
  @Input() placeholder = '';
  @Input() title = '';
  @Input() titleName = '';
  @Input() titleClasses = '';
  @Input() valueChange: (value: Event) => void;
}


