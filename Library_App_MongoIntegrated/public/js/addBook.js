var title = document.getElementById('title');
var author = document.getElementById('author');
var genre = document.getElementById('genre');
var image = document.getElementById('image');
var add = document.getElementById('add');

add.addEventListener('submit', validate);
title.addEventListener('focus', reset_title);
author.addEventListener('focus', reset_author);
genre.addEventListener('focus', reset_genre);
image.addEventListener('focus', reset_image);

function validate() {
    if (title.value == '' && author.value == '' && image.value == '' && genre.value == '') {
        title.classList.add('error');
        author.classList.add('error');
        image.classList.add('error');
        genre.classList.add('error');
        return false;
    } else if (title.value == '') {
        title.classList.add('error');
        return false;
    } else if (author.value == '') {
        author.classList.add('error');
        return false;
    } else if (genre.value == '') {
        genre.classList.add('error');
        return false;
    } else if (image.value == '') {
        image.classList.add('error');
        return false;
    } else {
        return true;
    }
}
function reset_title() {
    title.classList.remove('error');
};
function reset_author() {
    author.classList.remove('error');
};
function reset_genre() {
    genre.classList.remove('error');
}
function reset_image() {
    image.classList.remove('error');
}