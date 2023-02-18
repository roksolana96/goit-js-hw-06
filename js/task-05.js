
const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', onInputeChange)

function onInputeChange(event) {
    outputName.textContent = !event.currentTarget.value.trim() ? 'Anonymous' : event.currentTarget.value.trim();
         
};

// inputName.addEventListener('input', (event) => {
//     outputName.textContent = !event.currentTarget.value.trim() ? 'Anonymous' : event.currentTarget.value.trim();
// });



