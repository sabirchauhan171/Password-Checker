const passwordInput = document.getElementById('password');
const showBtn = document.getElementById('showBtn');
const strengthText = document.getElementById('strength');
const scoreText = document.getElementById('score');
const lenIcon = document.getElementById('lenIcon');
const upperIcon = document.getElementById('upperIcon');
const lowerIcon = document.getElementById('lowerIcon');
const numIcon = document.getElementById('numIcon');
const symbolIcon = document.getElementById('symbolIcon');

showBtn.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showBtn.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        showBtn.textContent = 'Show';
    }
});

passwordInput.addEventListener('input', checkPassword);

window.onload = function () {
    passwordInput.value = "Sabir123";
    checkPassword();
};

function checkPassword() {
    const password = passwordInput.value;
    let score = 0;
    if (password.length >= 8) {
        lenIcon.textContent = '✓';
        lenIcon.className = 'icon valid';
        score++;
    } else {
        lenIcon.textContent = '✗';
        lenIcon.className = 'icon invalid';
    }

    let hasUpper = false;
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 'A' && password[i] <= 'Z') {
            hasUpper = true;
            break;
        }
    }
    if (hasUpper) {
        upperIcon.textContent = '✓';
        upperIcon.className = 'icon valid';
        score++;
    } else {
        upperIcon.textContent = '✗';
        upperIcon.className = 'icon invalid';
    }

    let hasLower = false;
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 'a' && password[i] <= 'z') {
            hasLower = true;
            break;
        }
    }
    if (hasLower) {
        lowerIcon.textContent = '✓';
        lowerIcon.className = 'icon valid';
        score++;
    } else {
        lowerIcon.textContent = '✗';
        lowerIcon.className = 'icon invalid';
    }

    let hasNumber = false;
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= '0' && password[i] <= '9') {
            hasNumber = true;
            break;
        }
    }
    if (hasNumber) {
        numIcon.textContent = '✓';
        numIcon.className = 'icon valid';
        score++;
    } else {
        numIcon.textContent = '✗';
        numIcon.className = 'icon invalid';
    }
    let hasSymbol = false;
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    for (let i = 0; i < password.length; i++) {
        if (symbols.includes(password[i])) {
            hasSymbol = true;
            break;
        }
    }
    if (hasSymbol) {
        symbolIcon.textContent = '✓';
        symbolIcon.className = 'icon valid';
        score++;
    } else {
        symbolIcon.textContent = '✗';
        symbolIcon.className = 'icon invalid';
    }

    scoreText.textContent = score + "/5";

    if (score === 0 || score === 1) {
        strengthText.textContent = "Very Weak";
        strengthText.style.color = "#f44336";
    } else if (score === 2) {
        strengthText.textContent = "Weak";
        strengthText.style.color = "#FF9800";
    } else if (score === 3) {
        strengthText.textContent = "Fair";
        strengthText.style.color = "#2196F3";
    } else if (score === 4) {
        strengthText.textContent = "Good";
        strengthText.style.color = "#4CAF50";
    } else if (score === 5) {
        strengthText.textContent = "Strong";
        strengthText.style.color = "#2E7D32";
    }
}