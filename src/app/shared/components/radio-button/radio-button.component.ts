import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-radio-button',
  template: `
    <div class="form-check">
      <input class="form-check-input" type="radio" [name]="'radio-' + id" [id]="id" [value]="value" [checked]="isChecked" (click)="onButtonClick($event)">
      <label class="form-check-label" [for]="'radio-' + id">
        {{label}}
      </label>
    </div>
  `,
})
export class RadioButtonComponent implements OnInit {
  @Input() isPreChecked: boolean;
  @Input() label: string;

  @Input() radioSelect: (value: string, checked: boolean) => void;
  @Input() id = 'button';
  @Input() value: string;

  isChecked: boolean;

  ngOnInit(): void {
    this.isChecked = this.isPreChecked;
  }

  public onButtonClick(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;

    const checked = element.checked;
    const value = element.value;

    if (this.radioSelect) {
      this.radioSelect(value, checked);
    }
  }
}
