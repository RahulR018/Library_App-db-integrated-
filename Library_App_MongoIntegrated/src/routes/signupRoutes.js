const express = require('express');
const signupRouter = express.Router();
const Signupdata=require('../model/signupdata');


function srouter(nav){
    signupRouter.get('/', (req, res) => {
        res.render('signup', {
            title: 'Signup',
            nav,
            // go: { link: '/login' }
        })
    });
    signupRouter.get('/login', function (req,res){
        var item={
            fstName:req.query.fstName,
            lstName:req.query.lstName,
            dob:req.query.dob,
            gender:req.query.gender,
            user:req.query.user,
            email:req.query.email,
            password:req.query.password,
            confirmpassword:req.query.confirmpassword,
            telephone:req.query.telephone
        }
        var signup=Signupdata(item);
        signup.save();
        res.redirect('/login');
    })
    
    return signupRouter;
}


module.exports=srouter;