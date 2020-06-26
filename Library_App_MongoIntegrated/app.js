const express = require('express');

const nav = [
    { link: '/', name: 'HOME' },
    { link: './login', name: 'LOGIN' },
    { link: './signup', name: 'SIGNUP' },
    {link:'./books', name:'BOOKS'}
]

const booksRouter=require('./src/routes/booksRouter')(nav);
const authorsRouter = require('./src/routes/authorRoutes');
const loginRouter = require('./src/routes/LoginRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
const addBookRouter= require('./src/routes/addBookRouter');



var app = new express();

app.use(express.static('./public'));//This means static will search inside the folder public, But you have point where in folder exactly in the ejs files
app.use('/signup', signupRouter);
app.use('/signup/login', loginRouter);
app.use('/login', loginRouter);
app.use('/login/authors', authorsRouter);
app.use('/books',booksRouter);
app.use('/login/addBook',addBookRouter)


app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', function (req, res) {
    res.render('Home', {
        title: 'Library',
        nav
    })
});



app.listen(5000);

