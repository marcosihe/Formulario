//Arreglo para almacenar las respuestas o datos ingresados por el usuario
let answersArray = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    country: '',
    languages: [],
    level: ''
};

//Objeto que servirá para comprobar que se hayan completado todos los campos
let field = {
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    country: false,
    languages: false,
    level: false
}
//Enviar y mostrar datos ingresados
const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', e => {
    e.preventDefault(); //Anula el funcionamiento nativo de este botón

    //evalúa el checkbox de términos y condiciones y envía en caso 'true'
    const terms = document.querySelector('#terms');
    if (terms.checked) {
        assign('#answerName', answersArray.firstName, 'Nombre');
        assign('#answerLastName', answersArray.lastName, 'Apellido');
        assign('#answerEmail', answersArray.email, 'E-mail');
        assign('#answerPhoneNumber', answersArray.phoneNumber, 'Teléfono');
        assign('#answerCountry', answersArray.country, 'País');
        assign('#answerLanguage', answersArray.languages, 'Lenguajes de Programación');
        assign('#answerLevel', answersArray.level, 'Nivel');
    }else{
          terms.className = 'form-check-input is-invalid';
        }
});

let assign = (id, arrayProperty, nameToShow) => {
    const answer = document.querySelector(id);
    answer.innerHTML = `${nameToShow}: ${arrayProperty}`;
}

//input - name
const names = document.querySelector('#name');
names.addEventListener('input', e => {
    answersArray.firstName = names.value;
    field.firstName = true;
});

//input - last name
const lastName = document.querySelector('#lastName');
lastName.addEventListener('input', e => {
    answersArray.lastName = lastName.value;
    field.lastName = true;
});

//input - email
const email = document.querySelector('#email');
email.addEventListener('input', e => {
    answersArray.email = email.value;
    field.email = true;
});

//input - phone number
const phone = document.querySelector('#phoneNumber');
phone.addEventListener('input', e => {
    answersArray.phoneNumber = parseInt(phone.value);
    field.phoneNumber = true;
});

//select - countries
const country = document.querySelector('#country');
country.addEventListener('change', e => {
    answersArray.country = country.value;
    field.country = true;
});

//select - add countries
const countryButton = document.querySelector('#countryButton');
countryButton.addEventListener('click', e => {
    e.preventDefault(); //sin esta línea de código la página se actualiza automáticamente por defecto
    const newCountry = document.querySelector('#inputTextCountry').value;
    if (newCountry == '') return false; //Evita añadir texto vacío, haciendo que termine la función al hacer click cuando no hay texto
    const option = document.createElement('option');
    option.value = newCountry;
    option.text = newCountry; //text es una propiedad del nuevo elemento 'option' con esto se logra mostrar en las opciones
    country.add(option);
});

//checkbox - languages
const languages = document.querySelectorAll('input[type=checkbox]');
languages.forEach(language =>{
    language.addEventListener('click', e => {
        getLanguages();
    });
    field.languages = true;
});

let getLanguages = () => {
    answersArray.languages = [];
    const items = document.querySelectorAll('input[type=checkbox]:checked');
    items.forEach(item => {
        answersArray.languages.push(item.value);
    });
    answersArray.languages.pop(); //elimina el último elemento el cual es el checkbox de términos y condiciones
}

//selector - radios
const levels = document.querySelectorAll('input[type=radio]');
levels.forEach(level => {
    level.addEventListener('click', e => {
        answersArray.level = e.target.value;
    });
    field.level = true;
});

//VALIDACIONES

//name - last name
requiredField = input => {
    if (input.value.trim() == '') {
        input.className = 'form-control is-invalid';
    }else{
        input.className = 'form-control is-valid';
    }
}

//e-mail
validateEmail = email => {
    let expression = /\w+@\w+\.[a-z]{2,}$/; //no detecta mails de la UNT
    if (email.value.trim() != '' && expression.test(email.value)) {
        email.className = 'form-control is-valid';
    }else {
        email.className = 'form-control is-invalid';
    }
}

//phone number
validateNumber = number => {
    if (number.value.trim() != '' && !isNaN(number.value)){
        number.className = 'form-control is-valid';
    }else {
        number.className = 'form-control is-invalid';
    }
}

//terms
validateTerms = (terms = document.querySelector('#terms')) => {
    if (terms.checked) {
        //document.querySelector('#submit-button').disabled = false;
        terms.className = 'form-check-input is-valid';
    }else{
        terms.className = 'form-check-input is-invalid';
    }
}
