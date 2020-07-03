var authname = document.getElementById('name');
var authbook = document.getElementById('book');
var authimage = document.getElementById('image');
var add = document.getElementById('add');

add.addEventListener('submit', validate);
authname.addEventListener('focus', reset_authname);
authbook.addEventListener('focus', reset_authbook);
authimage.addEventListener('focus', reset_authimage);

function validate() {
    if (authname.value == '' && authbook.value == '' && authimage.value == '') {
        authname.classList.add('error');
        authbook.classList.add('error');
        authimage.classList.add('error');
        return false;
    } else if (authname.value == '') {
        authname.classList.add('error');
        return false;
    } else if (authbook.value == '') {
        authbook.classList.add('error');
        return false;
    } else if (authimage.value == '') {
        authimage.classList.add('error');
        return false;
    } else {
        return true;
    }
}
function reset_authname() {
    authname.classList.remove('error');
};
function reset_authbook() {
    authbook.classList.remove('error');
};
function reset_authimage() {
    authimage.classList.remove('error');
}