const express= require('express');
const booksRouter= express.Router();
function broutes(nav){
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

    booksRouter.get('/', function(req,res){
        res.render('books',{
            title:"Books",
            nav,
            go:{link:"/books"},
            books
        });
    });

    booksRouter.get('/:i', function (req, res) {
        const i = req.params.i
        res.render('book', {
            nav: [{ link: '/', name: 'HOME' },
             { link: '/login/addbook', name: 'ADD BOOK' },
             { link: '/books', name: 'BOOKS' }],
            book: books[i],
            title: "Book Bio"
        });
    });

    return booksRouter;
}

module.exports=broutes;