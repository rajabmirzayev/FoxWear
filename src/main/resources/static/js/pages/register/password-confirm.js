const form = document.querySelector(".content-register .register-form form");
const password = document.querySelector(".content-register #password");
const confirmPassword = document.querySelector(".content-register #confirm-password");

function validatePasswords() {
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
    } else {
        confirmPassword.setCustomValidity("");
    }
}

password.addEventListener("input", validatePasswords);
confirmPassword.addEventListener("input", validatePasswords);

form.addEventListener("submit", (e) => {
    validatePasswords();

    if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
    }
});