const form = document. getElementBydId('form');
const email_input= document.getElementById('password-input');
const password_input = document.getElementById('error-message');
const error_message = document.getElementById('error-messasge');

form.addEventListenner('submit', (e) =>) {
    alert(email_input.value);
    error_message.innerText = password_input.value;
}