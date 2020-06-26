const express = require('express');
const addBookRouter = express.Router();

addBookRouter.get('/', function (req, res) {
    res.render('addBook', {
        title: 'Add Book',
        nav: [
            { link: '/', name: 'HOME' },
            { link: '/login', name: 'LOGOUT' },
            { link: '/authors', name: "AUTHORS" },
            { link: '/books', name: 'BOOKS' }
        ]
    })
});
module.exports=addBookRouter;