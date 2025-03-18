const firstnameInput = document.getElementById('firstname');
const displayFirstname = document.getElementById('display-firstname');

firstnameInput.addEventListener('keyup', function() {
    displayFirstname.textContent = firstnameInput.value;
});


const ageInput = document.getElementById('age');
const hardTruthSection = document.getElementById('a-hard-truth');

ageInput.addEventListener('keyup', function() {
    const age = parseInt(ageInput.value, 10);
    if (age >= 18) {
        hardTruthSection.style.visibility = 'visible';
    } else {
        hardTruthSection.style.visibility = 'hidden';
    }
});


const pwdInput = document.getElementById('pwd');
const pwdConfirmInput = document.getElementById('pwd-confirm');

function validatePasswords() {
    const password = pwdInput.value;
    const confirmPassword = pwdConfirmInput.value;
    pwdInput.style.outline = 'none';
    
    pwdInput.setCustomValidity('');
    pwdConfirmInput.setCustomValidity('');
    
    if (password.length < 6) {
        pwdInput.setCustomValidity('Le mot de passe doit contenir au moins 6 caractères');
        pwdInput.style.border = '2px red solid';
    } else if (password !== confirmPassword) {
        pwdConfirmInput.setCustomValidity('Les mots de passe ne correspondent pas');
        pwdInput.style.border = '2px red solid';
        pwdConfirmInput.style.border = '2px red solid';
    } else {
        pwdInput.style.border = '2px green solid';
        pwdConfirmInput.style.border = '2px green solid';
    }
    
    pwdInput.reportValidity();
    pwdConfirmInput.reportValidity();
}

pwdInput.addEventListener('keyup', validatePasswords);
pwdConfirmInput.addEventListener('keyup', validatePasswords);

const modeSelector = document.getElementById('toggle-darkmode');

function applyMode() {
    if (modeSelector.value === 'dark') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}

modeSelector.addEventListener('change', applyMode);

applyMode();
