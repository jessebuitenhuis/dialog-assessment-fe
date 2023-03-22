import {StoredWeightData} from '../../../types';

export function saveToStorage(key: string, data: Array<StoredWeightData>): void {
  localStorage.setItem(key, JSON.stringify(data));
}

export function retreatFromStorage(key: string): Array<StoredWeightData> | null {
  const storedData = localStorage.getItem(key);

  return storedData ? JSON.parse(storedData) : null;
}
