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
  private goalSubject = new BehaviorSubject<number>(null);
  private weightSubject = new BehaviorSubject<Weight[]>([]);
  constructor() { }

  setGoal(goal: number): void {
    this.goalSubject.next(goal);
  }

  getGoal(): Observable<number> {
    return this.goalSubject.asObservable();
  }

  addWeight(weight: Weight): void {
    this.weightSubject.next([...this.weightSubject.value, weight]);
  }

  getWeight(): Observable<Weight[]> {
    return this.weightSubject.asObservable();
  }
}
