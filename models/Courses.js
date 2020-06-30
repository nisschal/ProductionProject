/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Defining course table schema
const CourseSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    url: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Course = mongoose.model('courses', CourseSchema);
