const mongoose = require('../../database');

SubscribeSchema = new mongoose.Schema({ 
    email: {
        type: String,
        lowercase: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Subscribe = mongoose.model('Subscribe', SubscribeSchema);

module.exports = Subscribe;
