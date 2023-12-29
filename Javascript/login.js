function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
        alert('Login successful!');
        // Redirect to the homepage or desired page
        window.location.href = '1_homepage.html'; // Replace 'homepage.html' with your actual homepage URL
    } else {
        alert('Login failed. Please check your credentials.');
    }
}

