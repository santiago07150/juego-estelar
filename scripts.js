document.addEventListener('DOMContentLoaded', () => {
    const togglePasswordButton = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const toggleConfirmPasswordButton = document.getElementById('toggleConfirmPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    togglePasswordButton.addEventListener('click', () => {
        const isPasswordVisible = passwordInput.type === 'text';
        passwordInput.type = isPasswordVisible ? 'password' : 'text';
        togglePasswordButton.classList.toggle('fa-eye', isPasswordVisible);
        togglePasswordButton.classList.toggle('fa-eye-slash', !isPasswordVisible);
    });

    toggleConfirmPasswordButton.addEventListener('click', () => {
        const isConfirmPasswordVisible = confirmPasswordInput.type === 'text';
        confirmPasswordInput.type = isConfirmPasswordVisible ? 'password' : 'text';
        toggleConfirmPasswordButton.classList.toggle('fa-eye', isConfirmPasswordVisible);
        toggleConfirmPasswordButton.classList.toggle('fa-eye-slash', !isConfirmPasswordVisible);
    });
});

function validateRegisterForm() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const passwordError = document.getElementById("passwordError");

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

    if (!passwordPattern.test(password)) {
        if (passwordError) {
            passwordError.textContent = "La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula y un carácter especial.";
        }
        return false;
    }

    if (password !== confirmPassword) {
        if (passwordError) {
            passwordError.textContent = "Las contraseñas no coinciden.";
        }
        return false;
    }

    if (passwordError) {
        passwordError.textContent = ""; // Limpia el mensaje de error si todo es correcto
    }
    return true;
}
