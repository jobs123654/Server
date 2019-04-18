var express = require('express');
var router = express.Router();

/* user */
router.get('/login', function(req, res, next) {
    let user={
        name:'1',
        pwd:'12wwww'
    }
    res.send(JSON.stringify(user))
});

module.exports = router;
