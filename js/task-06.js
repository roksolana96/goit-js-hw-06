const validationInput = document.querySelector('#validation-input');


validationInput.addEventListener('blur', (event) => {
    if(event.currentTarget.value.length === Number(validationInput.dataset.length)){
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }
});
console.log(validationInput)

