import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Weight } from './models/weight';

@Injectable({
  providedIn: 'root'
})
export class WeightService {
  /**
   * Stored weight goal for reusability during this task. Otherwise should
   * be stored in DB
   *
   */
  goal!: number;
  // addedWeights = new Set<number>();
  private weightSubject = new BehaviorSubject<Weight[]>([]);
  constructor() { }

  addWeight(weight: Weight): void {
    this.weightSubject.next([...this.weightSubject.value, weight]);
  }

  getWeight(): Observable<Weight[]> {
    return this.weightSubject.asObservable();
  }
}
