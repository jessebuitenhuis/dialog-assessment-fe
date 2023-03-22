import { v4 as uuidv4 } from 'uuid';
export function kgToLbs(kg: number): number {
  return kg * 2.20462;
}

export function generateId(): string {
  return uuidv4();
}

export function removeDecimalValues(value: string): string {
  return parseFloat(value.replace(',', '.')).toFixed(3);
}
