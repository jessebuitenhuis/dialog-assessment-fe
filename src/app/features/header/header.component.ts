import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SharedService } from '../../core/services/shared.service';
import { kgToLbs } from '../../shared/utils/utils';
import { getWeightUnit } from '../../shared/utils/textUtils';

import { UserSettings } from '../../../types';

@Component({
  selector: 'app-header',
  template: `
    <header class="navbar navbar-expand-lg navbar-light bg-light p-2">
      <div class="justify-content-start flex-column ps-4">
        <app-title classes="m-0" [title]="'Hello ' + userSettings.userName "></app-title>
        <app-sub-title classes="m-0" [subTitle]="weightTitle"></app-sub-title>
      </div>
      <div class="d-flex justify-content-end flex-row pe-4">
        <b>Kg</b>
        <app-switch classes="mx-1" [switchChange]="changeWeightUnits"></app-switch>
        <b>Lbs</b>
      </div>
    </header>
  `,
})

export class HeaderComponent implements OnInit, OnDestroy {
  weightTitle: string;
  userSettings: UserSettings;
  private ngUnsubscribe = new Subject<void>();

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.userSettings$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(userSettings => {
        this.userSettings = userSettings;

        const unitType = getWeightUnit(this.userSettings.isMetric);
        const weightValue = this.userSettings.isMetric ? this.userSettings.targetWeight : kgToLbs(this.userSettings.targetWeight);

        this.weightTitle = `Your target weight is ${weightValue}${unitType}`;
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  changeWeightUnits = (isChecked: boolean): void => {

    this.sharedService.userSettings = {
      ...this.userSettings,
      isMetric: !isChecked,
    };
  }
}
