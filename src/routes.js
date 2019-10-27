var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello baby");
});

router.post('/api/contact', (req, res) => {
    console.log(req.body);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ status: `Hello from Backend ${req.body.name}!` }));
});

module.exports = router;
