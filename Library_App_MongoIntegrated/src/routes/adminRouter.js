const express = require('express');
const adminRouter = express.Router();

const authorsRouter = require('./authorRoutes');
const booksRouter= require('./booksRouter');
const addBookRouter=require('./addBookRouter');
const addAuthorRouter=require('./addAuthorRouter');





adminRouter.get('/', (req, res) => {
    res.render('Home', {
        title: 'Library',
        nav: [
            { link: '/admin', name: 'HOME' },
            { link: '/login', name: 'LOGOUT' },
            { link: '/admin/authors', name: 'AUTHORS' },
            { link: '/admin/books', name: 'BOOKS' },
            { link: '/admin/addAuthor', name: 'ADD AUTHOR' },
            { link: '/admin/addBook', name: 'ADD BOOK' }
        ]
    });
});

adminRouter.use('/authors',authorsRouter);
adminRouter.use('/books',booksRouter);
adminRouter.use('/addBook',addBookRouter);
adminRouter.use('/addAuthor',addAuthorRouter);

// adminRouter.get('/books', function (req, res) {

//     res.render('books', {
//         nav: [
//             { link: '/admin', name: 'HOME' },
//             { link: '/login', name: 'LOGOUT' },
//             { link: '/admin/authors', name: 'AUTHORS' },
//             { link: '/admin/books', name: 'BOOKS' },
//             { link: '/admin/addAuthor', name: 'ADD AUTHOR' },
//             { link: '/admin/addBook', name: 'ADD BOOK' }],
//     });
// });

// adminRouter.get('/addAuthor', function (req, res) {

//     res.render('addAuthor', {
//         nav: [
//             { link: '/admin', name: 'HOME' },
//             { link: '/login', name: 'LOGOUT' },
//             { link: '/admin/authors', name: 'AUTHORS' },
//             { link: '/admin/books', name: 'BOOKS' },
//             { link: '/admin/addAuthor', name: 'ADD AUTHOR' },
//             { link: '/admin/addBook', name: 'ADD BOOK' }],
//     });
// });

// adminRouter.get('/addBook', function (req, res) {

//     res.render('addBook', {
//         nav: [
//             { link: '/admin', name: 'HOME' },
//             { link: '/login', name: 'LOGOUT' },
//             { link: '/admin/authors', name: 'AUTHORS' },
//             { link: '/admin/books', name: 'BOOKS' },
//             { link: '/admin/addAuthor', name: 'ADD AUTHOR' },
//             { link: '/admin/addBook', name: 'ADD BOOK' }],
//     });
// });

module.exports = adminRouter;