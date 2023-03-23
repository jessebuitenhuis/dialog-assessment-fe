import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-screen',
  template: `
    <app-weight-edit-view [id]="id" [isMetric]="isMetric"></app-weight-edit-view>
  `,
})
export class EditScreenComponent implements OnInit {
  id: string;

  @Input() isMetric: boolean;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }
}
