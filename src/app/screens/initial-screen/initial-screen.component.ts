import { Component, OnInit } from '@angular/core';
import {UserSettings} from '../../../types';
import {storageKeys} from '../../../environments/environment';
import {saveToStorage} from '../../shared/utils/storageUtils';

@Component({
  selector: 'app-initial-screen',
  templateUrl: './initial-screen.component.html',
})
export class InitialScreenComponent implements OnInit {
  userName: string;
  targetWeight: number;
  isMetric: boolean;

  submitDisabled = true;

  private readonly storageKey = storageKeys.userSettings;

  ngOnInit(): void {
    this.targetWeight = 0;
    this.userName = '';
    this.isMetric = true;
  }

  formSubmit(): void {
    const userData: UserSettings = {
      targetWeight: this.targetWeight,
      isMetric: this.isMetric,
      userName: this.userName
    };

    saveToStorage<UserSettings>(this.storageKey, userData);
  }

  updateDisabledState(): void {
    this.submitDisabled = !(this.userName && this.targetWeight);
  }

  setUserName = (event: Event): void => {
    const element = event.currentTarget as HTMLInputElement;

    this.userName = element.value;
    this.updateDisabledState();
  }

  setTargetWeight = (event: Event): void => {
    const element = event.currentTarget as HTMLInputElement;

    this.targetWeight = Number(element.value);
    this.updateDisabledState();
  }

  changeWeightUnit(value: string): void {
    this.isMetric = value === 'Kg';
  }
}
