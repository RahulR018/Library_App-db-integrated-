const express = require('express');
const addBookRouter = express.Router();
const Bookdata=require('../model/Bookdata')

addBookRouter.get('/', function (req, res) {
    res.render('addBook', {
        title: 'Add Book',
        nav: [
            { link: '/admin', name: 'HOME' },
            { link: '/login', name: 'LOGOUT' },
            { link: '/admin/authors', name: "AUTHORS" },
            { link: '/admin/books', name: 'BOOKS' },
            { link: '/admin/addAuthor', name: 'ADD AUTHOR' },
            { link: '/admin/addBook', name: 'ADD BOOK' }
        ]
    })
});

addBookRouter.get('/add', function (req, res) {
    var item = {
        title:req.query.title,
        author:req.query.author,
        genre:req.query.genre,
        image:req.query.image
    }
    var book=Bookdata(item);
    book.save();//saving to database
    res.redirect('/admin/books');
})
module.exports = addBookRouter;