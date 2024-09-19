// security.js

// Function to validate input against basic attack patterns
function validateInput(input) {
    const forbiddenPatterns = [ /<script>/i, /<\/script>/i, /'/, /"/, /;/, /--/i ];
    return !forbiddenPatterns.some(pattern => pattern.test(input));
}

// Function to handle form submission and validation
function handleFormSubmit(event) {
    const form = event.target;
    const inputField = form.querySelector('input[name="userInput"]');
    const errorMessage = form.querySelector('#error-message');

    const userInput = inputField.value;

    if (!validateInput(userInput)) {
        errorMessage.textContent = 'Input contains illegal characters!';
        event.preventDefault(); // Stop form submission
        return false;
    }

    return true; // Allow form submission if validation passes
}

// Attach event listener to forms with the class 'secure-form'
function attachFormListeners() {
    const forms = document.querySelectorAll('.secure-form');
    forms.forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });
}

// Initialize form listeners on page load
document.addEventListener('DOMContentLoaded', attachFormListeners);
