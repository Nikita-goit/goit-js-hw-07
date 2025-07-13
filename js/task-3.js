const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  const inputContent = event.target.value.trim();
  if (inputContent === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = inputContent;
  }
});
