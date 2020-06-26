const express = require('express');
const loginRouter = express.Router();

function router(nav) {
    loginRouter.get('/', (req, res) => {
        res.render('login', {
            title: 'Login',
            nav,
            go: { link: '/login/authors' }
        })
    });
    return loginRouter;
}



module.exports = router;