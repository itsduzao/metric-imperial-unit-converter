const inputValueField = document.getElementById('input-value')
const btnConvert = document.getElementById('btn-convert')
const userInputNodes = document.querySelectorAll('.user-input')
const conversionResultElements = {
  feetOutput: document.getElementById('feet-output'),
  metersOutput: document.getElementById('meters-output'),
  gallonsOutput: document.getElementById('gallons-output'),
  litersOutput: document.getElementById('liters-output'),
  poundsOutput: document.getElementById('pounds-output'),
  kilogramsOutput: document.getElementById('kilograms-output'),
}
const outputMapping = {
  'feet-output': 'metersToFeet',
  'meters-output': 'feetToMeters',
  'gallons-output': 'litersToGallons',
  'liters-output': 'gallonsToLiters',
  'pounds-output': 'kilogramsToPounds',
  'kilograms-output': 'poundsToKilograms'
};

inputValueField.addEventListener('input', () => {
  inputValueField.setAttribute('aria-valuenow',inputValueField.value)
})

btnConvert.addEventListener('click', () => {
  const valueToConvert = inputValueField.value
  const convertedUnits = convertUnits(valueToConvert) 
  renderAllConversions(convertedUnits)
  userInputNodes.forEach(field => field.textContent = valueToConvert)
})

export function convertUnits(value){
  const convertedValues = {
    metersToFeet: convertMetersToFeet(value).toFixed(3),
    feetToMeters: convertFeetToMeters(value).toFixed(3),
    litersToGallons: convertLitersToGallons(value).toFixed(3),
    gallonsToLiters: convertGallonsToLiters(value).toFixed(3),
    kilogramsToPounds: convertKilogramsToPounds(value).toFixed(3),
    poundsToKilograms: convertPoundsToKilograms(value).toFixed(3),
  }
  return convertedValues
}

function renderAllConversions(convertedUnits) {
  Object.entries(conversionResultElements).forEach(([key, element]) => {
    const conversionKey = outputMapping[element.id];
    renderConvertedValue(element, convertedUnits[conversionKey]);
  });
}

export function renderConvertedValue(element, value){
  element.textContent = value
}

export function convertMetersToFeet(value){
  return value / 0.3048
}

export function convertFeetToMeters(value){
  return value * 0.3048
}

export function convertLitersToGallons(value){
  return value / 3.785412
}

export function convertGallonsToLiters(value){
  return value * 3.785412
}

export function convertKilogramsToPounds(value){
  return value / 0.4535924
}

export function convertPoundsToKilograms(value){
  return value * 0.4535924
}