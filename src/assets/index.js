const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// show success outline

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}
//check email is 
function checkEmail(input) {
    console.log(input.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {
        showSuccess(input);
    }
    else {
        showError(input, 'Email is not valid')
    }
}
// check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getfieldName(input)} must be at least ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${getfieldName(input)} must be less than ${max} characters`)
    }
    else[
        showSuccess(input)
    ]
}
//check required

function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getfieldName(input)} is required`)
        }
        else {
            showSuccess(input)
        }
    })

}
// check passwords match
function chechPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match')
    }

}

// get field name
function getfieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([username, email, password, password2])
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email)
    chechPasswordMatch(password, password2)

})