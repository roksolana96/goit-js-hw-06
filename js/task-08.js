const form = document.querySelector('.login-form');


form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){

    const formData = event.currentTarget.elements;
    
    const mail = formData.email.value;
    const password = formData.password.value;

    const allForms = {
        mail,
        password,
    }


    if (formData.email.value === '' || formData.password.value === ''){
        alert('Warning! All fields are not filled!');     
    }

    event.preventDefault(); 
    event.currentTarget.reset(); 
    console.log(allForms);


    // const formData = new FormData (event.currentTarget);
    // console.log(formData)
}