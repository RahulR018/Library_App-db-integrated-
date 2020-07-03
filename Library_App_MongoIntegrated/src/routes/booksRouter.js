const express = require('express');
const booksRouter = express.Router();

var books = [
    {
        title: "Harry Potter",
        author: "J K Rowling",
        genre: "Fantasy",
        img: "harry.jpg"


    },
    {
        title: "Goosebumps: RIP The Cat",
        author: "R L Stine",
        genre: "Horror Novel",
        img: "goosebumps.jpg"


    },
    {
        title: "Hardy Boys: The Night Of The Werewolf",
        author: "Franklin W Dixon",
        genre: "Detective Novel",
        img: "hardyboys.jpg"


    },
]

booksRouter.get('/', function (req, res) {
    res.render('books', {
        title: "Books",
        nav: [
            { link: '/admin', name: 'HOME' },
            { link: '/login', name: 'LOGOUT' },
            { link: '/admin/authors', name: 'AUTHORS' },
            { link: '/admin/books', name: 'BOOKS' },
            { link: '/admin/addAuthor', name: 'ADD AUTHOR' },
            { link: '/admin/addBook', name: 'ADD BOOK' }
        ],
        go: { link: "/books" },
        books
    });
});
booksRouter.get('/:i', function (req, res) {
    const i = req.params.i
    res.render('book', {
        nav: [
            { link: '/admin', name: 'HOME' },
            { link: '/login', name: 'LOGOUT' },
            { link: '/admin/authors', name: 'AUTHORS' },
            { link: '/admin/books', name: 'BOOKS' },
            { link: '/admin/addAuthor', name: 'ADD AUTHOR' },
            { link: '/admin/addBook', name: 'ADD BOOK' }
        ],
        book: books[i],
        title: "Book Bio"
    });
});



module.exports = booksRouter;