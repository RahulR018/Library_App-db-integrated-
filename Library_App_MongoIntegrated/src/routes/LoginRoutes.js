const express = require('express');
const loginRouter = express.Router();
const Signupdata = require('../model/signupdata');


function router(nav) {
    loginRouter.get('/', (req, res) => {
        res.render('login', {
            title: 'Login',
            nav,
            // go: { link: '/admin' }
        })
    });
    loginRouter.get('/admin', function (req, res) {
        Signupdata.find().then(function (profiles) {
            for (i = 0; i < profiles.length; i++) {
                if ((profiles[i].email == req.query.email) && (profiles[i].password == req.query.pass)) {
                    if (profiles[i].user == 2) {
                        res.redirect('/admin');
                    } else {
                        res.redirect('/student');
                    }
                } else if((profiles[i].email != req.query.email) && (profiles[i].password != req.query.pass)){
                    res.render('alert');
                }
            }
        })
    })
    return loginRouter;
}
module.exports = router;