
export function getWeightTitle(isMetric: boolean): string {
  return `(in ${isMetric ? 'kg' : 'lb'})`;
}
