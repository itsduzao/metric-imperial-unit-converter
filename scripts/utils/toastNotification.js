export function showToast(message, type = 'error') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'polite');
  toast.textContent = message;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
      toast.classList.add('toast-fade-out');
      setTimeout(() => {
          document.body.removeChild(toast);
      }, 300);
  }, 3000);
}