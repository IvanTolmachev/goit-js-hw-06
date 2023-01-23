const textEl = document.querySelector('#text');
const inputEl = document.querySelector('#font-size-control');

inputEl.addEventListener('input', () => {
  textEl.style.fontSize = inputEl.value + 'px';
});
