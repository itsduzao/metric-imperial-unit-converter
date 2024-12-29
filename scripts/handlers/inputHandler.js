import { inputValueField } from '../dom/elements.js';

export function handleInputChange(event) {
  const value = event.target.value;
  inputValueField.setAttribute('aria-valuenow', value);
}