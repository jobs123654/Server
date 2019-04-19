var express = require('express');
var router = express.Router();

/* user */
router.get('/login', function(req, res, next) {
    let name=req.query.name,pwd=req.query.pwd;
    let user={
        name:name,
        pwd:pwd
    }
    res.send(JSON.stringify(user))
});

module.exports = router;
