const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

input.addEventListener('input', event => {
  nameOutput.textContent = event.currentTarget.value;
  if (input.value === '') {
    nameOutput.textContent = 'Anonymous';
  }
});
