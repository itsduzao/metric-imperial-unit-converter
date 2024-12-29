const DECIMAL_PLACES = 3

export function formatValueToPrecision(value) {
  return Number(value).toFixed(DECIMAL_PLACES);
}
