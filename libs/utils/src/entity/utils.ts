import { MayNull } from './primitives';

export function isString(value: any): value is string {
  return typeof value === 'string';
}

export function exists<T>(value: MayNull<T>): value is NonNullable<T> {
  return value !== undefined && value !== null;
}

export function existsNot(value: any): value is undefined | null {
  return !exists(value);
}

export function isNumber(value: any): value is number {
  return typeof value === 'number';
}
