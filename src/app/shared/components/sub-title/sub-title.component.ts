import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sub-title',
  template: `
    <app-title [title]="subTitle" classes="fs-6 {{classes}}"></app-title>
  `,
})

export class SubTitleComponent {
  @Input() subTitle: string;
  @Input() classes: string;
}
