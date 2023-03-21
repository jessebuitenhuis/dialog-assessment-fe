import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <p class="text-xxl-start {{classes}}">{{title}}</p>
  `,
})

export class TitleComponent {
  @Input() classes: string | Array<string>;
  @Input() title = '';
}
