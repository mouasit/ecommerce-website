export function isEmptyString(value: string): boolean {
  if (!value?.trim().length) return false;
  return true;
}

export function isDigit(value: string): boolean {
  if (!/^[0-9]+$/.test(value)) return false;
  return true;
}