import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  /**
   * Stores a value in the local storage.
   * @param key - The key under which the value is stored.
   * @param value - The value to be stored.
   */
  setItem<T>(key: string, value: T): void {
    let storeValue: string;
    if (typeof value === 'object' && value !== null) {
      storeValue = JSON.stringify(value);
    } else {
      storeValue = String(value);
    }
    localStorage.setItem(key, storeValue);
  }

  /**
   * Retrieves a value from the local storage.
   * @param key - The key under which the value is stored.
   * @returns The retrieved value.
   */
  getItem<T>(key: string): T {
    const item = localStorage.getItem(key);
    if (item) {
      try {
        const parsed = JSON.parse(item);
        if (typeof parsed === 'object' && parsed !== null) {
          return parsed;
        }
      } catch {
        return item as unknown as T;
      }
    }
    return item as unknown as T;
  }

  /**
   * Removes an item from the local storage.
   * @param key - The key under which the value is stored.
   */
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Clears all items from the local storage.
   */
  clear(): void {
    localStorage.clear();
  }

  /**
   * Gets the name of the key at the given index in the local storage.
   * @param index - The index of the key.
   * @returns The name of the key.
   */
  key(index: number): string | null {
    return localStorage.key(index);
  }

  /**
   * Gets the number of items in the local storage.
   * @returns The number of items in the local storage.
   */
  length(): number {
    return localStorage.length;
  }
}
