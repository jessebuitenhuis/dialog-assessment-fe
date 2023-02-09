import { Injectable } from '@angular/core';

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
  addedWeights = new Set<number>();
  constructor() { }

}
