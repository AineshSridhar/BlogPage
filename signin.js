// // script.js
// const loginForm = document.getElementById('login-form');
// const signupForm = document.getElementById('signup-form');
// const loginErrorMsg = document.getElementById('login-error-msg');

// loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     // Check if user has an account
//     if (checkAccount(username, password)) {
//         // Log in user
//         console.log('Logged in successfully!');
//     } else {
//         // Show error message
//         loginErrorMsg.style.opacity = 1;
//     }
// });

// signupForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const newUsername = document.getElementById('new-username').value;
//     const newPassword = document.getElementById('new-password').value;
//     const confirmPassword = document.getElementById('confirm-password').value;
//     // Check if passwords match
//     if (newPassword === confirmPassword) {
//         // Create new account
//         console.log('Account created successfully!');
//     } else {
//         // Show error message
//         console.log('Passwords do not match!');
//     }
// });

// function checkAccount(username, password) {
//     // TO DO: Implement account checking logic
//     // For now, just return true or false
//     return true;
// }