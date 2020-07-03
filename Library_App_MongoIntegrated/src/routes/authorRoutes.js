const express = require('express');
const authorsRouter = express.Router();

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

authorsRouter.get('/', (req, res) => {
    res.render('authors', {
        title: 'Authors',
        nav: [
            { link: '/admin', name: 'HOME' },
            { link: '/login', name: 'LOGOUT' },
            { link: '/admin/authors', name: 'AUTHORS' },
            { link: '/admin/books', name: 'BOOKS' },
            { link: '/admin/addAuthor', name: 'ADD AUTHOR' },
            { link: '/admin/addBook', name: 'ADD BOOK' }
        ],
        authors
    })
});


authorsRouter.get('/:i', function (req, res) {
    const i = req.params.i
    res.render('author', {
        nav: [
            { link: '/admin', name: 'HOME' },
            { link: '/login', name: 'LOGOUT' },
            { link: '/admin/authors', name: 'AUTHORS' },
            { link: '/admin/books', name: 'BOOKS' },
            { link: '/admin/addAuthor', name: 'ADD AUTHOR' },
            { link: '/admin/addBook', name: 'ADD BOOK' }
        ],
        author: authors[i],
        title: "Author Bio"
    });
});

module.exports = authorsRouter;
