const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);

  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
  event.currentTarget.reset();
}
