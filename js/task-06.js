const inputEl = document.querySelector('#validation-input');
// const nameAttribute = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', () => {
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});
