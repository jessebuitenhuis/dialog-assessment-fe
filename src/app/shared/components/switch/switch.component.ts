import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-switch',
  template: `
    <div [class]="classes +' form-check form-switch'">
      <input class="form-check-input" type="checkbox" role="switch" [id]="'app-switch' + id" (click)="onSwitchClick($event)">
      <label class="form-check-label" [for]="'app-switch' + id">
        <ng-container *ngIf="label">{{label}}</ng-container>
        <ng-container *ngIf="!label"><ng-content></ng-content></ng-container>
      </label>
    </div>
  `,
})
export class SwitchComponent {
  @Input() isPreChecked: boolean;
  @Input() label: string;
  @Input() id = '-default';

  @Input() classes: string;

  @Input() switchChange: (checked: boolean) => void;

  onSwitchClick(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;

    const checked = element.checked;

    this.switchChange(checked);
  }
}
