const textInput = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

const getInputValue = ({ currentTarget }) => {
    if (currentTarget.value.trim() !== '') {
      nameRef.textContent = currentTarget.value.trim();
    } else {
      nameRef.textContent = 'Anonymous';
    }
  };
  
  textInput.addEventListener('input', getInputValue);