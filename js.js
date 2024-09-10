// Simulando una base de datos de usuarios para este ejemplo
const usersDatabase = {
    'user@example.com': 'Password123!'
};

// Validación del formulario de inicio de sesión
function validateLoginForm(event) {
    event.preventDefault(); // Previene el envío del formulario

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Por favor, complete todos los campos.");
        return false; // Previene el envío del formulario
    }

    if (!usersDatabase.hasOwnProperty(email)) {
        alert("El usuario no existe.");
        return false; // Previene el envío del formulario
    }

    if (usersDatabase[email] !== password) {
        alert("La contraseña es incorrecta.");
        return false; // Previene el envío del formulario
    }

    // Redirigir a otra página si la contraseña es correcta
    window.location.href = 'index1.html';
    return true; // Permite la redirección
}

document.addEventListener('DOMContentLoaded', () => {
    const togglePasswordButton = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    togglePasswordButton.addEventListener('click', () => {
        const isPasswordVisible = passwordInput.type === 'text';
        passwordInput.type = isPasswordVisible ? 'password' : 'text';
        togglePasswordButton.classList.toggle('fa-eye', !isPasswordVisible);
        togglePasswordButton.classList.toggle('fa-eye-slash', isPasswordVisible);
    });

    // Enlazar la función de validación al evento submit del formulario
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', validateLoginForm);
});
