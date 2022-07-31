const formLogin = document.getElementById('formLogin');
const emailLogin = document.getElementById('loginEmail');
const passwordLogin = document.getElementById('loginPassword');


// Submit form start

formLogin.addEventListener("submit", (e) => {
    e.preventDefault();

    check();
    
})

// Submit form end

// Login control start

function check() {
   
    const emailLoginValue = emailLogin.value.trim();
    const passwordLoginValue = passwordLogin.value.trim();
   
  
    if (emailLoginValue === "") {

        setErrorFor(emailLogin, 'Email cannot be blank')
    } else if (!isEmail(emailLoginValue)) {
        setErrorFor(emailLogin, 'Not a valid email')
    } else {
        setSuccessFor(emailLogin)
    }

    if (passwordLoginValue === "") {

        setErrorFor(passwordLogin, 'Password cannot be blank')
    } 
    else if(passwordLoginValue.length<6){
        setErrorFor(passwordLogin,'Enter a password of at least 6 characters')
    }
    
    else {
        setSuccessFor(passwordLogin)
    }

  
}

// Login control end


// Set error start

function setErrorFor(input, message) {
    const formLoginControl = input.parentElement;
    const small = formLoginControl.querySelector("small");

    small.innerText = message;

    formLoginControl.className = 'fc error';
}


// Set error end


// Set success start

function setSuccessFor(input) {
    const formLoginControl = input.parentElement;

    formLoginControl.className = 'fc success';
}

// Set success end

// Email regex start

function isEmail(email) {

    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}

// Email regex end