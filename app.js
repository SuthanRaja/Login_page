

const email = document.getElementById('email');

const password = document.getElementById('password');

const form = document.getElementById('form');

const emailError = document.getElementById('emailError');

const passwordError = document.getElementById('passwordError');

const btn = document.getElementById('btn');

const displayInfo = document.getElementById('displayInfo');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    if (email.value === '' || email.value === null) {
        emailError.innerHTML = "Email is required";
        isValid = false;
    }

    else {
        emailError.innerHTML = "";
    }


    if (password.value === '' || password.value === null) {
        passwordError.innerHTML = "Password is required";
        isValid = false;
    }

    else {
        passwordError.innerHTML = "";
    }

    if(isValid){
        btn.innerHTML = "Text is generating..";
        setTimeout(() => {
            btn.innerHTML = "Loading..";
        },2000 );

        setTimeout(() => {
            btn.innerHTML = 'Login';
            displayInfo.innerHTML = `<p>Email: ${email.value}</p> <p>Password: ${password.value}</p>`;

        },4000);

        setTimeout(function(){
            window.location.reload();
         }, 10000);
    }

});








