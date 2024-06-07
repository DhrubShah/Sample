function showLogin() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('forgot-password-form').classList.add('hidden');
}

function showSignUp() {
    document.getElementById('signup-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('forgot-password-form').classList.add('hidden');
}

function showForgotPassword() {
    document.getElementById('forgot-password-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.add('hidden');
}

function login() {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
    // Add your login logic here
    alert('Login with email: ' + email);
}

function signUp() {
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;
    // Add your sign up logic here
    alert('Sign Up with email: ' + email);
}

function forgotPassword() {
    var email = document.getElementById('forgot-email').value;
    // Add your forgot password logic here
    alert('Forgot Password for email: ' + email);
}
