import {v4 as uuidv4} from 'uuid';

export function kgToLbs(kg: number): number {
  return Math.floor(kg * 2.20462);
}

export function generateId(): string {
  return uuidv4();
}

export function removeDecimalValues(value: string): string {
  return parseFloat(value.replace(',', '.')).toFixed(3);
}

export function formatDate(milliseconds: number): string {
  const date = new Date(milliseconds);
  const dateStr = date.toDateString();

  const [_, month, dayOfMonth, year] = dateStr.split(' ');

  return `${month} ${dayOfMonth}, ${year}`;
}
