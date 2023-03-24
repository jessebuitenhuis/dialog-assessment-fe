import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../core/services/shared.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-edit-screen',
  template: `
    <app-weight-edit-view
      [id]="id"
      [isMetric]="isMetric"
    ></app-weight-edit-view>
  `,
})
export class EditScreenComponent implements OnInit, OnDestroy {
  id: string;

  isMetric: boolean;

  private ngUnsubscribe = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });

    this.route.params
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((params) => {
        if (params.id) {
          this.id = params.id;
        }
      });

    this.sharedService.userSettings$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((userSettings) => {
        this.isMetric = userSettings.isMetric;
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
