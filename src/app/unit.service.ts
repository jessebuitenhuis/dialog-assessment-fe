import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export type Unit = 'KG' | 'LB';

@Injectable({
  providedIn: 'root',
})
export class UnitService {
  private unitSource = new BehaviorSubject<Unit>('KG');
  currentUnit = this.unitSource.asObservable();

  constructor() {}

  toggleUnit() {
    this.unitSource.next(this.unitSource.value === 'KG' ? 'LB' : 'KG');
  }
}
