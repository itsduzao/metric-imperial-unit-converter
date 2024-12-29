import { inputValueField, userInputNodes } from '../dom/elements.js'
import { ConversionType } from '../constants/ConversionType.js'
import { renderAllConversions } from '../dom/renderer.js'
import { validateInput } from '../utils/validateInput.js';
import { formatValueToPrecision } from '../utils/formatValueToPrecision.js';
import {
  convertFeetToMeters,
  convertMetersToFeet,
} from '../converters/lengthConverter.js'
import {
  convertKilogramsToPounds,
  convertPoundsToKilograms,
} from '../converters/massConverter.js'
import {
  convertGallonsToLiters,
  convertLitersToGallons,
} from '../converters/volumeConverter.js'

export function handleConversion() {
  try {
    const value = validateInput(inputValueField.value)
    const convertedUnits = convertUnits(value)
    renderAllConversions(convertedUnits)
    updateUserInputFields(value)
  } catch (error) {
    console.error('Conversion error:', error)
  }
}

function updateUserInputFields(value) {
  userInputNodes.forEach(field => (field.textContent = value))
}

function convertUnits(value) {
  return {
    [ConversionType.METERS_TO_FEET]: formatValueToPrecision(
      convertMetersToFeet(value)
    ),
    [ConversionType.FEET_TO_METERS]: formatValueToPrecision(
      convertFeetToMeters(value)
    ),
    [ConversionType.LITERS_TO_GALLONS]: formatValueToPrecision(
      convertLitersToGallons(value)
    ),
    [ConversionType.GALLONS_TO_LITERS]: formatValueToPrecision(
      convertGallonsToLiters(value)
    ),
    [ConversionType.KILOGRAMS_TO_POUNDS]: formatValueToPrecision(
      convertKilogramsToPounds(value)
    ),
    [ConversionType.POUNDS_TO_KILOGRAMS]: formatValueToPrecision(
      convertPoundsToKilograms(value)
    ),
  }
}
