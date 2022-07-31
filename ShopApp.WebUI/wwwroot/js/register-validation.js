const formRegister = document.getElementById('formRegister');
const username = document.getElementById('registerfullName');
const email = document.getElementById('registerEmail');
const password = document.getElementById('registerPassword');
const rePassword = document.getElementById('registerRePassword');

// Register form submit start

formRegister.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
})

// Register form submit end

// Register form control start

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const rePasswordValue = rePassword.value.trim();

    if (usernameValue === "") {

        setErrorFor(username, 'Username cannot be blank')
    }
    else {
        setSuccessFor(username)
    }

    if (emailValue === "") {

        setErrorFor(email, 'Email cannot be blank')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email')
    } else {
        setSuccessFor(email)
    }



    if (passwordValue === "") {

        setErrorFor(password, 'Password cannot be blank')
    } else if (passwordValue.length < 6) {
        setErrorFor(password, 'Enter a password of at least 6 characters')
    } else {
        setSuccessFor(password)
    }


    

    if (rePasswordValue === "") {

        setErrorFor(rePassword, 'Repassword cannot be blank')
    } else if (rePasswordValue !== passwordValue) {
        setErrorFor(rePassword, "Passwords do not match")
    } else if (rePasswordValue.length < 6) {
        setErrorFor(rePassword, 'Enter a password of at least 6 characters')
    } else {
        setSuccessFor(rePassword)
    }
}

// Register form control end


// Set error start

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = 'fc error';
}


// Set error end



// Set success start

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'fc success';
}

// Set success end

// Email regex start

function isEmail(email) {

    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}

// Email regex end