function validateForm(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');

    nameError.textContent = '';
    emailError.textContent = '';

    const nameRegex = /^[A-Za-z][A-Za-z ]{2,}$/;
    if (!nameRegex.test(nameInput.value)) {
        nameError.textContent = 'Name should contain at least one alphabet followed by additional alphabets or spaces.';
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        return;
    }

    console.log(`Subscribed!\nName: ${nameInput.value}\nEmail: ${emailInput.value}`);
}

function toggleNav() {
    var body = document.body;
    body.classList.toggle('sections-hidden');

    var mobileIcon = document.getElementById('mobile-icon');
    mobileIcon.classList.toggle('active');
}

function hideNav() {
    var body = document.body;
    body.classList.remove('sections-hidden');

    var mobileIcon = document.getElementById('mobile-icon');
    mobileIcon.classList.remove('active');
}