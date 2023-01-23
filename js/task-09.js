function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const textSpan = document.querySelector('.color');

const handleClick = () => {
  body.style.backgroundColor = getRandomHexColor();
  textSpan.textContent = getRandomHexColor();
};

changeColorBtn.addEventListener('click', handleClick);
