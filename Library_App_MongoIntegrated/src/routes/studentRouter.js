const express = require('express');
const studentRouter = express.Router();

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

var authors = [
    {
        name: "Paulo Coelho",
        book: "The Alchemist",
        genre: "Novel",
        img: "paulo_coelho.jpg"


    },
    {
        name: "Osho",
        book: "Freedom: The Courage to be Yourself",
        genre: "Self Help",
        img: "osho.jpg"


    },
    {
        name: "Eckhart Tolle",
        book: "The Power of Now",
        genre: "Self help",
        img: "eckart.jpg"


    },
]





studentRouter.get('/', (req, res) => {
    // res.send('You are in student Page');
    res.render('Home', {
        title: 'Library',
        nav: [
            { link: '/student', name: 'HOME' },
            { link: '/login', name: 'LOGOUT' },
            { link: '/student/authors', name: 'AUTHORS' },
            { link: '/student/books', name: 'BOOKS' }
        ]
    });
});

studentRouter.get('/books', (req, res) => {
    res.render('books', {
        title: "Books",
        nav: [
            { link: '/student', name: 'HOME' },
            { link: '/login', name: 'LOGOUT' },
            { link: '/student/authors', name: 'AUTHORS' },
            { link: '/student/books', name: 'BOOKS' }
        ],
        go: { link: "/books" },
        books
    })
});

studentRouter.get('/books/:i', (req, res) => {
    const i = req.params.i
    res.render('book', {
        nav: [
            { link: '/student', name: 'HOME' },
            { link: '/login', name: 'LOGOUT' },
            { link: '/student/authors', name: 'AUTHORS' },
            { link: '/student/books', name: 'BOOKS' }
        ],
        book: books[i],
        title: "Book Bio"
    })
});

studentRouter.get('/authors', (req, res) => {
    res.render('authors', {
        title: 'Authors',
        nav: [
            { link: '/student', name: 'HOME' },
            { link: '/login', name: 'LOGOUT' },
            { link: '/student/authors', name: 'AUTHORS' },
            { link: '/student/books', name: 'BOOKS' }
        ],
        authors
    })
})

studentRouter.get('/authors/:i', (req, res) => {
    const i = req.params.i
    req.render('author', {
        nav: [
            { link: '/student', name: 'HOME' },
            { link: '/login', name: 'LOGOUT' },
            { link: '/student/authors', name: 'AUTHORS' },
            { link: '/student/books', name: 'BOOKS' }
        ],
        author: authors[i],
        title: "Author Bio"
    })
})

module.exports = studentRouter;