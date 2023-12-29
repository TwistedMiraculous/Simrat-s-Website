function signup() {
    // Retrieve values from the signup form
    const firstName = document.getElementById('signup-fname').value;
    const lastName = document.getElementById('signup-lname').value;
    const email = document.getElementById('signup-email').value;
    const age = document.getElementById('signup-age').value;
    const yearOfGraduation = document.getElementById('signup-year').value;
    const password = document.getElementById('signup-password').value;

    // Create an object to represent user data
    const userData = {
        firstName,
        lastName,
        email,
        age,
        yearOfGraduation,
        password
    };

    // Store user data in localStorage with a unique key
    localStorage.setItem('userData', JSON.stringify(userData));
}
