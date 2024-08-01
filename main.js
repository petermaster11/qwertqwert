    // JavaScript to handle form submission
    const app =initializeApp(firebaseConfig);
    const auth = getAuth(app)
    const registerUser = document.getElementById('registerUser').value;
    document.getElementById('registrationForm').addEventListener('submit', registerUser);
    
    function registerUser(event) {
      event.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Firebase authentication to create a new user
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log('User registered:', user);
          alert('Registration successful!');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Error:', errorCode, errorMessage);
          alert('Registration failed: ' + errorMessage);
        });
    };
  