const mongoose = require('../../database');

QuadroSchema = new mongoose.Schema({ 
    email: {
        type: String,
        lowercase: true
    },
    name: {
        type: String
    },
    message1: {
        type: String
    },
    message2: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    birthDate: {
        type: Date,
        default: Date.now
    },
    birthTime: {
        type: String
    },
    weight: {
        type: Number
    },
    height: {
        type: Number
    },
    promoCheck: {
        type: Boolean
    }      

});

const Quadro = mongoose.model('Quadro', QuadroSchema);

module.exports = Quadro;
