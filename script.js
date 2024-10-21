// Password validation using regex
function isPasswordValid(password) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
}

// Signup function with validation
function handleSignup(event) {
    event.preventDefault();  // Prevent form submission

    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Check if the password meets the criteria
    if (!isPasswordValid(password)) {
        document.getElementById('signup-error-message').textContent = 'Password must be at least 8 characters long, include a number, an uppercase, and a lowercase letter!';
        document.getElementById('signup-error-message').style.display = 'block';
        return;
    }

    // Save the user credentials in localStorage
    localStorage.setItem(email, password);
    alert('Signup successful! You are now logged in.');
    
    // Automatically log the user in after successful signup and redirect to homepage
    window.location.href = 'homepage.html';
}

// Login function with validation
function handleLogin(event) {
    event.preventDefault();  // Prevent form submission

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    const storedPassword = localStorage.getItem(email);

    // Check if the credentials are correct
    if (storedPassword === password) {
        alert('Login successful!');
        window.location.href = 'homepage.html';  // Redirect to homepage
    } else {
        document.getElementById('login-error-message').textContent = 'Invalid credentials!';
        document.getElementById('login-error-message').style.display = 'block';
    }
}

// Toggle between login and signup forms
document.getElementById('signupLink').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
});

document.getElementById('loginLink').addEventListener('click', function() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});
