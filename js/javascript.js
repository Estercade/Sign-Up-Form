

const firstNameInput = document.getElementById("first-name");

firstNameInput.addEventListener('input', (e) => {
    // On input, reset class names before re-checking for pattern mismatch
    firstNameInput.className = "";
    if (!firstNameInput.validity.valid) {
        firstNameInput.classList.add("name-invalid");
    }});

const lastNameInput = document.getElementById("last-name");

lastNameInput.addEventListener('input', (e) => {
    // On input, reset class names before re-checking for pattern mismatch
    console.log(lastNameInput.validity);
    lastNameInput.className = "";
    if (!lastNameInput.validity.valid) {
        lastNameInput.classList.add("name-invalid");
    }});

const emailInput = document.getElementById("email");

emailInput.addEventListener('input', (e) => {
    // On input, reset class names before re-checking for pattern mismatch
    emailInput.className = "";
    if (!emailInput.validity.valid) {
        emailInput.classList.add("email-invalid");
    }});

const passwordInput = document.getElementById("password");

password.addEventListener('input', (e) => {
    passwordInput.className = "";
    if (!passwordInput.validity.valid) {
        passwordInput.classList.add("password-invalid")
    }});

const passwordConfirmInput = document.getElementById("password-confirm");
const submitButton = document.getElementById("submit");

passwordConfirmInput.addEventListener('focusout', (e) => {
    passwordConfirmInput.className = "";
    if (passwordInput.value !== passwordConfirmInput.value) {
        passwordConfirmInput.classList.add("password-mismatch");
        disableSubmit = true;
    } else {
        disableSubmit = false;
    }
})

submitButton.addEventListener('click', (e) => {
    if (!firstNameInput.validity.valid || !lastNameInput.validity.valid || !passwordInput.validity.valid || passwordInput.value !== passwordConfirmInput.value) {
        preventSubmit(e);
    } 
})

function preventSubmit(e) {
    e.preventDefault();
    window.alert("Please check the required fields for any errors and re-submit the form.")
}