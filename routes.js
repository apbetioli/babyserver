var express = require('express');
var router = express.Router();

router.post('/api/contact', (req, res, next) => {
    console.log(req.body);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ status: `Hello from Backend ${req.body.name}!` }));
});

module.exports = router;
