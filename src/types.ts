
export type WeightData = {
  weight: number,
  description?: string
};

export type StoredWeightData = WeightData & { id: string; created: number };

export type UserSettings = {
  targetWeight: number
  isMetric: boolean
  userName: string
};
