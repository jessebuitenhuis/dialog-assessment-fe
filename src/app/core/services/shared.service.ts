import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { retreatFromStorage, saveToStorage } from '../../shared/utils/storageUtils';
import { UserSettings } from '../../../types';
import { storageKeys } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  private readonly storageKey = storageKeys.userSettings;
  // tslint:disable-next-line:variable-name
  private _userSettings = new BehaviorSubject<UserSettings>(null);

  constructor() {
    const userData: UserSettings = retreatFromStorage<UserSettings>(this.storageKey);

    if (userData) {
      this._userSettings.next(userData);
    }
  }

  set userSettings(values: UserSettings) {
    this._userSettings.next(values);

    saveToStorage(this.storageKey, values);
  }

  get userSettings$(): Observable<UserSettings> {
    return this._userSettings.asObservable();
  }
}
