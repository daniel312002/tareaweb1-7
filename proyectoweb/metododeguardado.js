document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const userData = {};
    for (const [key, value] of formData.entries()) {
        userData[key] = value;
    }
    localStorage.setItem('userData', JSON.stringify(userData));
    // Redirigir al usuario solo si el registro se completa
    window.location.href = 'registrar.html';
});
