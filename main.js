// JavaScript to handle form submission
document.getElementById('registrationForm').addEventListener('submit', registerUser);

function registerUser(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Make a request to the specified URL
  fetch('https://suqwe.onrender.com/api/add-account/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    alert('Login successful!');
  })
  .catch((error) => {
    console.error('Error:', error);
    alert('Login failed: ' + error.message);
  });
}
