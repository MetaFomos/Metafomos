const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmailVerifySchema = new Schema({
    code: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('emailVerify', EmailVerifySchema);