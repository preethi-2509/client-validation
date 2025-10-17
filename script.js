const form = document.getElementById('registerForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent form submission
  validateForm();
});

function setError(element, message) {
  const parent = element.parentElement;
  const errorMsg = parent.querySelector('.error');
  errorMsg.innerText = message;
  element.classList.add('error-border');
}

function setSuccess(element) {
  const parent = element.parentElement;
  const errorMsg = parent.querySelector('.error');
  errorMsg.innerText = '';
  element.classList.remove('error-border');
}

function isValidEmail(emailStr) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(emailStr);
}

function validateForm() {
  let isValid = true;

  if (username.value.trim() === '') {
    setError(username, 'Username is required');
    isValid = false;
  } else {
    setSuccess(username);
  }

  if (email.value.trim() === '') {
    setError(email, 'Email is required');
    isValid = false;
  } else if (!isValidEmail(email.value.trim())) {
    setError(email, 'Email is not valid');
    isValid = false;
  } else {
    setSuccess(email);
  }

  if (password.value.trim() === '') {
    setError(password, 'Password is required');
    isValid = false;
  } else if (password.value.length < 6) {
    setError(password, 'Password must be at least 6 characters');
    isValid = false;
  } else {
    setSuccess(password);
  }

  if (confirmPassword.value.trim() === '') {
    setError(confirmPassword, 'Please confirm your password');
    isValid = false;
  } else if (confirmPassword.value !== password.value) {
    setError(confirmPassword, 'Passwords do not match');
    isValid = false;
  } else {
    setSuccess(confirmPassword);
  }

  if (isValid) {
    alert('✅ Form submitted successfully (client-side validation passed)');
    form.reset();
  }
}
