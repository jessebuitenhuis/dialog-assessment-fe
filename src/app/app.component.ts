import { Component, OnInit } from '@angular/core';

import { storageKeys } from '../environments/environment';
import { retreatFromStorage } from './shared/utils/storageUtils';
import { UserSettings } from '../types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  targetWeight: number;

  private readonly storageKey = storageKeys.userSettings;

  ngOnInit(): void {
    const userData = retreatFromStorage<UserSettings>(this.storageKey);

    this.targetWeight = userData.targetWeight;
  }
}
