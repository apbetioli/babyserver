const mongoose = require('../../database');

ContactSchema = new mongoose.Schema({ 
    name: {
        type: String
    },
    email: {
        type: String,
        lowercase: true
    },
    message: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
