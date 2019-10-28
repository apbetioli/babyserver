const nodemailer = require('nodemailer');
const config = require('../config/mail.json');
const mg = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: process.env.MAILGUN_PRIVATE_KEY,
        domain: process.env.MAILGUN_DOMAIN
    }
}

const transport = nodemailer.createTransport(mg(auth));

const send = async contact => {
    const mail = {
        to: config.to,
        from: "'" + contact.name + "' " + contact.email,
        subject: config.subject,
        text: contact.message,
        html: contact.message
    };

    const info = await transport.sendMail(mail);

    console.log('Contact sent: %s', info.messageId);
};

module.exports = { send };