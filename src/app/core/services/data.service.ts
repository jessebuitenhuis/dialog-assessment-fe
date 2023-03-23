import {Injectable} from '@angular/core';

import {retreatFromStorage, saveToStorage} from '../../shared/utils/storageUtils';
import {generateId, kgToLbs} from '../../shared/utils/utils';
import {StoredWeightData, WeightData} from '../../../types';
import {storageKeys} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly storageKey = storageKeys.data;
  private readonly data: Array<StoredWeightData> = [];

  constructor() {
    const storedData = retreatFromStorage<Array<StoredWeightData>>(this.storageKey);

    this.data = storedData || [];
  }

  public addData(value: WeightData, isMetric: boolean): void {
    const id = generateId();
    const created = Date.now();
    const weight = isMetric ? value.weight : kgToLbs(value.weight);

    this.data.push({ id, weight, created, description: value.description });

    saveToStorage<Array<StoredWeightData>>(this.storageKey, this.data);
  }

  public getDataById(id: string): WeightData | undefined {
    return this.data?.find((d) => d.id === id);
  }

  public getData(): Array<StoredWeightData> { return this.data; }

  public updateData(id: string, newValue: WeightData, isMetric: boolean): void {
    const index = this.data.findIndex((d) => d.id === id);

    if (index >= 0) {
      const weight = isMetric ? newValue.weight : kgToLbs(newValue.weight);

      this.data[index] = { ...this.data[index], weight, description: newValue.description};

      saveToStorage<Array<StoredWeightData>>(this.storageKey, this.data);
    }
  }
}
