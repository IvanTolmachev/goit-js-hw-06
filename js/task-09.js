function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const textSpan = document.querySelector('.color');
const handleClick = () => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  textSpan.textContent = color;
};

changeColorBtn.addEventListener('click', handleClick);
