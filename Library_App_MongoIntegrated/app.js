const express = require('express');

const nav = [
    { link: '/', name: 'HOME' },
    { link: './login', name: 'LOGIN' },
    { link: './signup', name: 'SIGNUP' }
]

// const booksRouter=require('./src/routes/booksRouter');

const loginRouter = require('./src/routes/LoginRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
const adminRouter=require('./src/routes/adminRouter');
const studentRouter=require('./src/routes/studentRouter');



var app = new express();

app.use(express.static('./public'));//This means static will search inside the folder public, But you have point where in folder exactly in the ejs files
app.use('/signup', signupRouter);
// app.use('/signup/login', loginRouter);
app.use('/login', loginRouter);
app.use('/admin', adminRouter);
app.use('/student', studentRouter);
// app.use('/admin/books',booksRouter);
// app.use('/admin/authors', authorsRouter);
// app.use('/admin/addAuthor', addAuthorRouter);
// app.use('/admin/addBook',addBookRouter);





app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', function (req, res) {
    res.render('Home', {
        title: 'Library',
        nav
    })
});



app.listen(5001);

