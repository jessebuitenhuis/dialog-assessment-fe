import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

export interface WeightEntry {
  date: Date;
  weight: number;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class WeightService {
  weightEntries: WeightEntry[];
  goal: number | null;
  private entryAddedSource: BehaviorSubject<WeightEntry[]>;

  constructor() {
    this.weightEntries = [];
    this.goal = null;
    this.entryAddedSource = new BehaviorSubject<WeightEntry[]>([]);
  }

  addEntry(entry: WeightEntry): void {
    this.weightEntries.push(entry);
    this.entryAddedSource.next(this.weightEntries);
  }

  setGoal(goal: number): void {
    this.goal = goal;
  }

  getProgress(): number | null {
    if (!this.weightEntries.length || !this.goal) {
      return null;
    }
    const latestWeight =
      this.weightEntries[this.weightEntries.length - 1].weight;
    return latestWeight - this.goal;
  }

  getEntryAddedObservable(): Observable<WeightEntry[]> {
    return this.entryAddedSource.asObservable();
  }
}
