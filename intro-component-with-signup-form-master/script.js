const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    // Trim values
    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();

    // First Name Validation
    if (firstName === '') {
        errorFunc(fname, "First Name cannot be empty");
    } else {
        successFunc(fname);
    }

    // Last Name Validation
    if (lastName === '') {
        errorFunc(lname, "Last Name cannot be empty");
    } else {
        successFunc(lname);
    }

    // Email Validation
    if (emailValue === '') {
        errorFunc(email, "Email cannot be empty");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
        errorFunc(email, "Enter a valid email address");
    } else {
        successFunc(email);
    }

    // Password Validation
    if (passwordValue === '') {
        errorFunc(password, "Password cannot be empty");
    } else {
        successFunc(password);
    }
});

function errorFunc(req, message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    req.classList.remove('success');
    req.classList.add('error');
    span.classList.add('error-text');
}

function successFunc(req) {
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = ''; // Clearing any error message
    req.classList.remove('error');
    req.classList.add('success');
}
