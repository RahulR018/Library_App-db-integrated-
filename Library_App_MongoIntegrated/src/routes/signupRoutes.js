const express = require('express');
const signupRouter = express.Router();
function srouter(nav){
    signupRouter.get('/', (req, res) => {
        res.render('signup', {
            title: 'Signup',
            nav,
            go: { link: '/login' }
        })
    });
    return signupRouter;
}


module.exports=srouter;