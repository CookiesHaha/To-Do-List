const errorEl = document.getElementById('input-error');

export function hideErrorMsg() {
  errorEl.style.display = 'none';
}

export function showErrorMsg() {
  errorEl.style.display = 'block';
}
