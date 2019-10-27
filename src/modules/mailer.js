const path = require('path');
const nodemailer = require('nodemailer');
const config = require('../config/mail.json');
const hbs = require('nodemailer-express-handlebars');

var transport = nodemailer.createTransport(config);

var options = {
    viewEngine: {
        extname: '.html', // handlebars extension
        layoutsDir: 'src/resources/mail/', // location of handlebars templates
        defaultLayout: 'template', // name of main template
        partialsDir: 'src/resources/mail/', // location of your subtemplates aka. header, footer etc
    },
    viewPath: 'src/resources/mail/',
    extName: '.html'
};

transport.use('compile', hbs(options));

var send = async contact => {
    const mail = {
        to: config.to,
        from: "'" + contact.name + "' " + contact.email,
        subject: config.subject,
        template: 'contact',
        context: {
            name: contact.name,
            email: contact.email,
            message: contact.message
        }
    };
    console.log(mail);
    const info = await transport.sendMail(mail);

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
};

module.exports = { send };