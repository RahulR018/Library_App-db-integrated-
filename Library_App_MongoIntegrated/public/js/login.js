var input = document.getElementById('email');
var pass = document.getElementById('pass');
var emailAlert = document.getElementById('emailHelp');
var passAlert = document.getElementById('passHelp');



input.addEventListener('input', email_validate);
pass.addEventListener('input', pass_validate);


input.addEventListener('focus', resete);
pass.addEventListener('focus', resetp);



function validate() {
    if (email_validate() == true && pass_validate() == true) {
        return true;
    } else if (email_validate() == false && pass_validate() == false) {
        input.classList.add('error');
        pass.classList.add('error');
        return false;
    } else if (email_validate() == false) {
        input.classList.add('error');
        return false;
    } else if (pass_validate() == false) {
        pass.classList.add('error');
        return false;
    } else {
        return true;
    }
}

function pass_validate() {
    if (pass.value == '') {
        pass.placeholder = "This field cannot be empty";
        return false;
    } else if (pass.value.length < 8) {
        return false;
    } else if (/^(?=(.*[a-z])+)(?=(.*[A-Z])+)(?=(.*[0-9])+)(?!.*\s).{8,}$/.test(pass.value)) {
        if (pass.value.length == 8) {
            return false;
        } else if (pass.value.length == 12) {
            return true;
        } else if (pass.value.length >= 15) {
            return true;
        }
    } else {
        return false;
    }
}
function email_validate() {
    if (input.value == '') {
        input.placeholder = "This Field cannot be empty";
        return false;
    } else if (/^[\w._]+@[a-zA-Z]+\.[a-zA-Z]{2,3}(\.[a-z]{2,3})?$/.test(input.value)) {
        emailAlert.innerText = "valid Email";
        emailAlert.style.color = "green";
        return true;
    } else {
        emailAlert.innerText = "Invalid input";
        emailAlert.style.color = "red";
        return false;
    }
}


function resete() {
    document.querySelector('input#email').classList.remove('error');
}
function resetp() {
    document.querySelector('input#pass').classList.remove('error');
}