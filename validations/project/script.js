const form = document.querySelector('.myForm');

const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const pass = document.getElementById('pass');
const con = document.getElementById('pass-con');
const error = document.querySelector('.error');

form.addEventListener('submit', (event) => {
    error.textContent = '';
    if (!validInputs()){ setErrors(); }
    if(pass.value != con.value){ error.textContent = 'Contraseña incorrecta.';}
    event.preventDefault();
});

email.addEventListener('input', ()=>{
    if (!email.checkValidity()) { setEmailError(); }
});

country.addEventListener('input', ()=>{
    if(!country.checkValidity()){ setCountryErrors(); }
});

zip.addEventListener('input', () => {
    if(!zip.checkValidity()){ setZipcodeErrors(); }
});

pass.addEventListener('input', () => {
    if(!pass.checkValidity()){ setPasswordErrors(); }
});

con.addEventListener('input', () => {
    if(!con.checkValidity()){ setConfirmPasswordErrors(); }
});


function validInputs(){
    return email.checkValidity() && country.checkValidity() && zip.checkValidity() && pass.checkValidity() && con.checkValidity();
}

function setErrors(){
    setEmailError();
    setCountryErrors();
    setZipcodeErrors();
    setPasswordErrors();
    setConfirmPasswordErrors();
}

function setEmailError(){
    if (email.validity.valueMissing) { email.setCustomValidity('Debe introducir una dirección de correo electrónico.'); } else 
    if (email.validity.typeMismatch) { email.setCustomValidity('El valor introducido debe ser una dirección de correo electrónico.'); } else 
    if (email.validity.tooShort    ) { email.setCustomValidity('El correo electrónico debe tener al menos ${ email.minLength } caracteres; ha introducido ${ email.value.length }.') ; }
    else { email.setCustomValidity(''); }
}

function setCountryErrors(){
    if (country.validity.valueMissing) { country.setCustomValidity('Introdusca un pais');}else
    if (country.validity.tooLong     ) { country.setCustomValidity('Demasiado largo');}
    else { country.setCustomValidity(''); }
}

function setZipcodeErrors(){
    if (zip.validity.valueMissing  ) {zip.setCustomValidity('Introdusca el codigo postal');}else
    if (zip.validity.rangeUnderflow) {zip.setCustomValidity('Demasiado corto');}else
    if (zip.validity.rangeOverflow ) {zip.setCustomValidity('Demasiado corto');}
    else { zip.setCustomValidity(''); }
}

function setPasswordErrors(){
    if (pass.validity.valueMissing  ) {pass.setCustomValidity('Introdusca el password');}else
    if (pass.validity.rangeUnderflow) {pass.setCustomValidity('Password demasiado corto');}
    else { pass.setCustomValidity(''); }
}

function setConfirmPasswordErrors(){
    if (con.validity.valueMissing  ) {con.setCustomValidity('Introdusca el password');}else
    if (con.validity.rangeUnderflow) {con.setCustomValidity('Password demasiado corto');}
    else { con.setCustomValidity(''); }
}