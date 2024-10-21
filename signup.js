// Simulated database to store user credentials
let users = JSON.parse(localStorage.getItem('users')) || [];

// Function for login logic
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // Redirect to homepage after login
        window.location.href = "homepage.html";
    } else {
        errorMessage.style.display = 'block';
    }
});

// Function for signup logic
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const errorMessage = document.getElementById('signup-error-message');

    if (password.length >= 8) {
        users.push({ email: email, password: password });
        localStorage.setItem('users', JSON.stringify(users));

        // Redirect to homepage after signup
        window.location.href = "homepage.html";
    } else {
        errorMessage.style.display = 'block';
    }
});

// Toggle between login and signup forms
document.getElementById('signupLink').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('signupLink').style.display = 'none';
    document.getElementById('loginLink').style.display = 'block';
    document.getElementById('form-heading').innerText = "Create Account";
    document.getElementById('form-subheading').innerText = "Enter your details to create an account";
});

document.getElementById('loginLink').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('signupLink').style.display = 'block';
    document.getElementById('loginLink').style.display = 'none';
    document.getElementById('form-heading').innerText = "Welcome Back";
    document.getElementById('form-subheading').innerText = "Enter your account credentials to view your orders";
});

// Placeholder "Forgot Password" logic (can be expanded)
document.getElementById('forgotPasswordLink').addEventListener('click', function() {
    alert("Password recovery options are not available yet.");
});
