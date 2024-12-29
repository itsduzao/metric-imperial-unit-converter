import { conversionResultElements } from './elements.js';
import { outputMapping } from '../constants/outputMapping.js';

export function renderAllConversions(convertedUnits) {
  Object.entries(conversionResultElements).forEach(([key, element]) => {
    const conversionKey = outputMapping[element.id];
    renderConvertedValue(element, convertedUnits[conversionKey]);
  });
}

function renderConvertedValue(element, value){
  element.textContent = value
}