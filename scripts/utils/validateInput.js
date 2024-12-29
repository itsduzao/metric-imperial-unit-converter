const MIN_VALUE = 0

export function validateInput(value) {
  if (!value || isNaN(value) || value < MIN_VALUE) {
    throw new Error('Invalid input value');
  }
  return Number(value);
}
