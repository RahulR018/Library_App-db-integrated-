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
        nav: [{ link: '/', name: 'HOME' },
        { link: '/login', name: 'LOGOUT' },
        { link: './authors', name: 'AUTHORS' },
        { link: '/books', name: 'BOOKS' },],
        authors
    })
});

authorsRouter.get('/:i', function (req, res) {
    const i = req.params.i
    res.render('author', {
        nav: [{ link: '/', name: 'HOME' },
        { link: '/login', name: 'LOGOUT' },
        { link: '/login/authors', name: 'AUTHORS' },
        { link: '/books', name: 'BOOKS' }],
        author: authors[i],
        title: "Author Bio"
    });
});

module.exports = authorsRouter;
