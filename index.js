import { btnConvert, inputValueField } from './scripts/dom/elements.js'
import { handleInputChange } from './scripts/handlers/inputHandler.js'
import { handleConversion } from './scripts/handlers/conversionHandler.js'

inputValueField.addEventListener('input', handleInputChange)
btnConvert.addEventListener('click', handleConversion)
