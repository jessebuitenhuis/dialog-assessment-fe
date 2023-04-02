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

  constructor() {
    this.weightEntries = [];
    this.goal = null;
  }

  addEntry(entry: WeightEntry): void {
    this.weightEntries.push(entry);
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
}
