var express = require('express');
var router = express.Router();
var Contact = require('../models/Contact');
var mailer = require('../../modules/mailer');

router.post('/contact', async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();

        mailer.send(contact).catch(console.error);

        res.status(201).send({ contact });
    } catch (e) {
        console.log(e);
        res.status(400).send({ error: 'Não foi possível enviar a mensagem' });
    }

});

module.exports = router;