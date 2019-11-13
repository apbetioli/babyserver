var express = require('express');
var router = express.Router();
var Quadro = require('../models/Quadro');

router.post('/quadro', async (req, res) => {
    try {
        const quadro = new Quadro(req.body);
        await quadro.save();

        res.status(201).send({ create: quadro });
    } catch (e) {
        console.log(e);
        res.status(400).send({ error: 'Não foi possível criar o quadro' });
    }

});

module.exports = router;