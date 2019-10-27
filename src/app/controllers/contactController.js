var express = require('express');
var router = express.Router();
var Contact = require('../models/Contact');

router.post('/contact', async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).send({ contact });
    } catch (e) {
        res.status(400).send({ error: 'Não foi possível enviar a mensagem' });
    }

});

module.exports = router;