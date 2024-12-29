import { showToast } from './toastNotification.js';

const MIN_VALUE = 0;

export function validateInput(value) {
    if (!value || isNaN(value)) {
        showToast('Por favor, insira um número válido');
        throw new Error('Invalid input value');
    }
    
    if (value <= MIN_VALUE) {
        showToast('O valor deve ser maior que zero');
        throw new Error('Invalid input value');
    }
    
    return Number(value);
}
