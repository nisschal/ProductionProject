/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defining User table schema

const UserSchema = new Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    Usertype: {
        type: String,
        default: 'basic',
        enum: ['admin', 'basic'],
    },
});

module.exports = User = mongoose.model('users', UserSchema);
