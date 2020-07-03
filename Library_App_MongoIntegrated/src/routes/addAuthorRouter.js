const express = require('express');
const addAuthorRouter = express.Router();
const Authordata=require('../model/Authordata')

addAuthorRouter.get('/', function (req, res) {
    res.render('addAuthor', {
        title: 'Add Author',
        nav: [
            { link: '/admin', name: 'HOME' },
            { link: '/login', name: 'LOGOUT' },
            { link: '/admin/authors', name: "AUTHORS" },
            { link: '/admin/books', name: 'BOOKS'},
            { link: '/admin/addAuthor', name: 'ADD AUTHOR' },
            { link: '/admin/addBook', name: 'ADD BOOK' }
        ]
    })
});

addAuthorRouter.get('/add', function (req,res){
    var item={
        name:req.query.name,
        book:req.query.book,
        image:req.query.image
    }
    var author=Authordata(item);
    author.save();//saving to database
    res.redirect('/admin/authors');
})
module.exports=addAuthorRouter;