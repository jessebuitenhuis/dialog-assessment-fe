export function saveToStorage<T>(key: string, data: T): void {
  localStorage.setItem(key, JSON.stringify(data));
}

export function retreatFromStorage<T>(key: string): T | null {
  const storedData = localStorage.getItem(key);

  return storedData ? JSON.parse(storedData) : null;
}
