export function saveToStorage(): void {
  localStorage.setItem(this.storageKey, JSON.stringify(this.data));
}

export function retreatFromStorage(key: string): any {
  const storedData = localStorage.getItem(key);

  return storedData ? JSON.parse(storedData) : null;
}
