var express = require('express');
var router = express.Router();
var Subscribe = require('../models/Subscribe');

router.post('/subscribe', async (req, res) => {
    try {
        const subscribe = new Subscribe(req.body);
        await subscribe.save();

        res.status(201).send({ subscribe: subscribe });
    } catch (e) {
        console.log(e);
        res.status(400).send({ error: 'Erro ao salvar os dados' });
    }

});

module.exports = router;