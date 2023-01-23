function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

const makeBox = boxSize => {
  const createBox = document.createElement('div');
  createBox.style.height = `${boxSize}px`;
  createBox.style.width = `${boxSize}px`;
  createBox.style.backgroundColor = getRandomHexColor();
  return createBox;
};

const createBoxes = amount => {
  let boxes = [];
  const firstStepBoxSize = 20;
  const sizeStep = 10;

  const lastBoxSize = boxesEl.lastElementChild
    ? Number.parseInt(boxesEl.lastElementChild.style.height)
    : firstStepBoxSize;

  for (let i = 1; i <= amount; i += 1) {
    boxes.push(makeBox(lastBoxSize + sizeStep * i));
  }
  return boxes;
};

createBtn.addEventListener('click', () => {
  const arrayBoxes = createBoxes(inputEl.value);
  if (inputEl.value === '') {
    return alert('Ведіть кількість блоків');
  }
  boxesEl.append(...arrayBoxes);
});

destroyBtn.addEventListener('click', () => {
  boxesEl.innerHTML = '';
  inputEl.value = '';
});
