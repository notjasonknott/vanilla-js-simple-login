const submit = document.querySelector('#submit-btn');
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const http = new Requests;

form.addEventListener('submit', loginUser);

function loginUser(e) {
  e.preventDefault();

  const user = [
    email.value,
    password.value
  ]

  // Turns the user array into a base64 ready plaintext
  http.login('http://0.0.0.0:8000/login/', user.join(":"))
  .then(data => console.log(data))
  .catch(err => console.log(err));
}